import React, { useState, useMemo, useEffect } from 'react';
import { getTopics, getQuestionsByTopic, getAllQuestions } from './data/questions';
import { AppScreen, Question, QuizState } from './types';
import TopicCard from './components/TopicCard';
import QuestionCard from './components/QuestionCard';
import ResultChart from './components/ResultChart';
import ScoreHistory from './components/ScoreHistory';
import { ChevronRight, ChevronLeft, CheckCircle, AlertCircle, RotateCcw, Home, Layers } from 'lucide-react';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.HOME);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const [quizState, setQuizState] = useState<QuizState>({
    answers: {},
    completed: false,
    score: 0
  });

  // history state and modal
  const [historyOpen, setHistoryOpen] = useState(false);
  const [historyAttempts, setHistoryAttempts] = useState<Array<{topic:string;score:number;total:number;date:string;markedDone?:boolean}>>([]);

  const HISTORY_KEY = 'ceep_score_history';
  const HISTORY_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

  const pruneOld = (items: Array<{date:string}>) => {
    const cutoff = Date.now() - HISTORY_MAX_AGE_MS;
    return items.filter(it => new Date(it.date).getTime() >= cutoff);
  };

  const loadHistory = () => {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw) as Array<{topic:string;score:number;total:number;date:string;markedDone?:boolean}>;
      const pruned = pruneOld(parsed);
      if (pruned.length !== parsed.length) localStorage.setItem(HISTORY_KEY, JSON.stringify(pruned));
      return pruned;
    } catch (e) {
      return [];
    }
  };

  const saveAttempt = (topic: string, score: number, total: number, markedDone?: boolean) => {
    try {
      const cur = loadHistory();
      const now = new Date().toISOString();

      if (markedDone) {
        // If there's already a markedDone for this topic, avoid duplicating.
        const alreadyMarked = cur.some(e => e.topic === topic && e.markedDone);
        if (alreadyMarked) {
          return;
        }

        // If there's an existing entry for this topic, update its markedDone flag (prefer latest entry).
        const idx = cur.findIndex(e => e.topic === topic);
        if (idx !== -1) {
          const updated = [...cur];
          updated[idx] = { ...updated[idx], markedDone: true, date: now };
          localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
          setHistoryAttempts(updated);
          return;
        }

        // Otherwise add a new markedDone entry at the front.
        const entry = { topic, score, total, date: now, markedDone: true } as const;
        const next = [entry, ...cur];
        localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
        setHistoryAttempts(next);
        return;
      }

      // Regular attempt: always add to history (most recent first)
      const entry = { topic, score, total, date: now };
      const next = [entry, ...cur];
      localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      setHistoryAttempts(next);
    } catch (e) {
      // ignore
    }
  };

  const clearHistory = () => {
    localStorage.removeItem(HISTORY_KEY);
    setHistoryAttempts([]);
  };

  useEffect(() => {
    setHistoryAttempts(loadHistory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topics = useMemo(() => getTopics(), []);
  const allQuestionsCount = useMemo(() => getAllQuestions().length, []);

  const startQuiz = (topic: string) => {
    let questions;
    if (topic === "Full Exam") {
      questions = getAllQuestions();
    } else {
      questions = getQuestionsByTopic(topic);
    }
    
    // Optional: Shuffle questions for better practice
    // questions = [...questions].sort(() => Math.random() - 0.5);

    setSelectedTopic(topic);
    setActiveQuestions(questions);
    setCurrentQuestionIndex(0);
    setQuizState({
      answers: {},
      completed: false,
      score: 0
    });
    setCurrentScreen(AppScreen.QUIZ);
  };

  const handleAnswerSelect = (optionLabel: string) => {
    if (quizState.completed) return;
    
    setQuizState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [activeQuestions[currentQuestionIndex].id]: optionLabel
      }
    }));
  };

  const navigateQuestion = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else if (direction === 'prev' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const finishQuiz = () => {
    let score = 0;
    activeQuestions.forEach(q => {
      if (quizState.answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    setQuizState(prev => ({ ...prev, completed: true, score }));
    setCurrentScreen(AppScreen.RESULT);
    // persist history (topic-wise)
    saveAttempt(selectedTopic ?? 'Unknown', score, activeQuestions.length, false);
  };

  const resetApp = () => {
    setCurrentScreen(AppScreen.HOME);
    setSelectedTopic(null);
    setActiveQuestions([]);
    setQuizState({ answers: {}, completed: false, score: 0 });
  };

  const renderHome = () => (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Cloud Engineer Exam Prep</h1>
          <p className="text-sm text-gray-500">Select a topic to start practicing or take the full exam.</p>
        </div>
        <div className="space-x-2">
          <button onClick={() => setHistoryOpen(true)} className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17a4 4 0 100-8 4 4 0 000 8zm0 0v4m0-4H7m4 0h4" />
            </svg>
            Scorecard
          </button>
        </div>
      </div>
      
      <div className="mb-8">
        <button
          onClick={() => startQuiz("Full Exam")}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all w-full group flex items-center justify-between"
        >
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-lg">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold">Full Practice Exam</h3>
              <p className="text-blue-100 opacity-90">All {allQuestionsCount} Questions Mixed</p>
            </div>
          </div>
          <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4 px-1">Practice by Topic</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map(topic => {
          const topicTotal = getQuestionsByTopic(topic).length;
          const completed = historyAttempts.some(h => h.topic === topic && (h.markedDone || h.total === topicTotal));
          return (
            <TopicCard 
              key={topic}
              topic={topic}
              count={topicTotal}
              onClick={() => startQuiz(topic)}
              completed={completed}
            />
          );
        })}
      </div>
    </div>
  );

  const renderQuiz = () => {
    const currentQuestion = activeQuestions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === activeQuestions.length - 1;
    const isFirstQuestion = currentQuestionIndex === 0;
    const currentAnswer = quizState.answers[currentQuestion.id];
    const progress = ((currentQuestionIndex + 1) / activeQuestions.length) * 100;

    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <button onClick={resetApp} className="text-gray-500 hover:text-gray-900 flex items-center">
            <Home className="w-4 h-4 mr-1" /> Home
          </button>
          <span className="text-sm font-medium text-gray-500">
            {selectedTopic}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <QuestionCard
          question={currentQuestion}
          selectedOptionLabel={quizState.answers[currentQuestion.id]}
          onSelect={handleAnswerSelect}
        />

        {!currentAnswer && (
          <div className="mt-4 text-sm text-red-600">Please select an option to continue.</div>
        )}

        <div className="flex justify-between mt-8">
          <button
            onClick={() => navigateQuestion('prev')}
            disabled={isFirstQuestion}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              isFirstQuestion 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-1" /> Previous
          </button>

          {isLastQuestion ? (
            <button
              onClick={finishQuiz}
              disabled={!currentAnswer}
              className={`px-8 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors ${!currentAnswer ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'}`}
            >
              Finish Exam <CheckCircle className="w-5 h-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={() => navigateQuestion('next')}
              disabled={!currentAnswer}
              className={`px-8 py-3 rounded-lg font-medium flex items-center shadow-md transition-colors ${!currentAnswer ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg'}`}
            >
              Next <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const correctCount = quizState.score;
    const totalCount = activeQuestions.length;
    const unansweredCount = totalCount - Object.keys(quizState.answers).length;
    const incorrectCount = totalCount - correctCount - unansweredCount;
    const percentage = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    const topicTotal = selectedTopic ? getQuestionsByTopic(selectedTopic).length : 0;
    const topicCompleted = selectedTopic ? historyAttempts.some(h => h.topic === selectedTopic && (h.markedDone || h.total === topicTotal)) : false;

    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-blue-600 p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
            <p className="opacity-90">{selectedTopic}</p>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-center mb-8">
                  <span className="text-6xl font-bold text-gray-900">{percentage}%</span>
                  <p className="text-gray-500 mt-2">Accuracy Rate</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700 font-medium">Correct</span>
                    </div>
                    <span className="text-green-700 font-bold">{correctCount}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border border-red-100">
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                      <span className="text-gray-700 font-medium">Incorrect</span>
                    </div>
                    <span className="text-red-700 font-bold">{incorrectCount}</span>
                  </div>

                  {unansweredCount > 0 && (
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-700 font-medium">Skipped</span>
                      </div>
                      <span className="text-gray-600 font-bold">{unansweredCount}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="h-full flex flex-col items-center justify-center">
                <ResultChart 
                  correct={correctCount} 
                  incorrect={incorrectCount} 
                  unanswered={unansweredCount} 
                />
              </div>
            </div>

            <div className="mt-12 flex justify-center space-x-4">
              <button
                onClick={resetApp}
                className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <Home className="w-5 h-5 mr-2" /> Back to Home
              </button>
              <button
                onClick={() => startQuiz(selectedTopic!)}
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                <RotateCcw className="w-5 h-5 mr-2" /> Retry Topic
              </button>
              <button
                onClick={() => {
                  // mark topic as done in cache
                  if (selectedTopic) {
                    saveAttempt(selectedTopic, quizState.score, activeQuestions.length, true);
                  }
                }}
                disabled={topicCompleted}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors shadow-md ${topicCompleted ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'}`}
              >
                {topicCompleted ? 'Marked' : 'Mark As Done'}
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Review Section */}
        <div className="mt-12 space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Review Answers</h3>
          {activeQuestions.map((q, idx) => {
            const userAnswer = quizState.answers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            const isSkipped = !userAnswer;

            return (
              <div key={q.id} className={`bg-white rounded-xl shadow p-6 border-l-4 ${isCorrect ? 'border-green-500' : isSkipped ? 'border-gray-300' : 'border-red-500'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Question {idx + 1}</span>
                    <p className="text-lg font-medium text-gray-900 mt-1">{q.text}</p>
                  </div>
                  <div className="ml-4">
                    {isCorrect ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Correct
                      </span>
                    ) : isSkipped ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        Skipped
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Incorrect
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <span className="text-xs text-gray-500 block mb-1">Your Answer</span>
                    <p className="font-medium">{userAnswer ? `${userAnswer}: ${q.options.find(o => o.label === userAnswer)?.text}` : 'None'}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                    <span className="text-xs text-gray-500 block mb-1">Correct Answer</span>
                    <p className="font-medium text-green-800">{q.correctAnswer}: {q.options.find(o => o.label === q.correctAnswer)?.text}</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Explanation:</span> {q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen font-sans">
      {currentScreen === AppScreen.HOME && renderHome()}
      {currentScreen === AppScreen.QUIZ && renderQuiz()}
      {currentScreen === AppScreen.RESULT && renderResult()}
      <ScoreHistory isOpen={historyOpen} onClose={() => setHistoryOpen(false)} attempts={historyAttempts} onClear={clearHistory} />
    </div>
  );
};

export default App;
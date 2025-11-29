export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
  topic: string;
}

export interface QuizState {
  answers: Record<number, string>; // questionId -> selectedOptionLabel
  completed: boolean;
  score: number;
}

export enum AppScreen {
  HOME = 'HOME',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
}
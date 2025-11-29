import React from 'react';
import { X } from 'lucide-react';

interface Attempt {
  topic: string;
  score: number;
  total: number;
  date: string; // ISO
  markedDone?: boolean;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  attempts: Attempt[];
  onClear: () => void;
}

const ScoreHistory: React.FC<Props> = ({ isOpen, onClose, attempts, onClear }) => {
  if (!isOpen) return null;

  const byTopic = attempts.reduce<Record<string, Attempt[]>>((acc, at) => {
    acc[at.topic] = acc[at.topic] || [];
    acc[at.topic].push(at);
    return acc;
  }, {});

  const topicSummaries = Object.entries(byTopic).map(([topic, list]) => {
    const totalAttempts = list.length;
    const avgPercent = Math.round((list.reduce((s, a) => s + (a.score / a.total) * 100, 0) / totalAttempts) || 0);
    const bestPercent = Math.max(...list.map(a => Math.round((a.score / a.total) * 100)));
    return { topic, totalAttempts, avgPercent, bestPercent, list };
  }).sort((a, b) => b.avgPercent - a.avgPercent);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-2xl w-[90%] md:w-3/4 max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h3 className="text-lg font-semibold">Score History</h3>
            <p className="text-sm text-gray-500">Performance by topic — last 30 days</p>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={onClear} className="text-sm px-3 py-1 bg-red-50 text-red-700 rounded hover:bg-red-100">Reset Cache</button>
            <button onClick={onClose} className="p-2 rounded hover:bg-gray-100"><X className="w-4 h-4"/></button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {topicSummaries.length === 0 ? (
            <p className="text-center text-gray-500">No history available.</p>
          ) : (
            topicSummaries.map(t => (
              <div key={t.topic} className="bg-white p-4 rounded-lg border shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-800">{t.topic}</h4>
                    <p className="text-sm text-gray-500">Attempts: <span className="font-semibold text-gray-700">{t.totalAttempts}</span> • Avg: <span className="font-semibold">{t.avgPercent}%</span> • Best: <span className="font-semibold">{t.bestPercent}%</span></p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {t.list.map((a) => (
                    <div key={a.date} className="p-3 bg-gray-50 rounded border flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600">{new Date(a.date).toLocaleString()}</div>
                        <div className="font-medium">{a.score} / {a.total} • <span className="text-indigo-600">{Math.round((a.score / a.total) * 100)}%</span></div>
                        {a.markedDone && <div className="text-xs text-green-700 mt-1">Marked done</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ScoreHistory;

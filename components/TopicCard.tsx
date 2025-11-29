import React from 'react';
import { BookOpen, Check } from 'lucide-react';

interface TopicCardProps {
  topic: string;
  count: number;
  onClick: () => void;
  completed?: boolean;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, count, onClick, completed = false }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden p-4 md:p-5 rounded-xl shadow-sm transition-transform transform-gpu hover:-translate-y-1 border text-left w-full group ${
        completed ? 'border-green-100 bg-green-50' : 'border-gray-100 bg-white'
      }`}
    >
      {completed && (
        <div className="absolute top-3 right-3 bg-white/80 rounded-full p-1 shadow-sm">
          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-green-600 text-white">
            <Check className="w-4 h-4" />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg transition-colors ${completed ? 'bg-green-100' : 'bg-gradient-to-br from-blue-50 to-white group-hover:from-blue-100'}`}>
            <BookOpen className={`w-6 h-6 ${completed ? 'text-green-600' : 'text-blue-600'}`} />
          </div>
          <div>
            <h3 className={`text-lg font-semibold ${completed ? 'text-green-800' : 'text-gray-800'}`}>{topic}</h3>
            <p className="text-sm text-gray-500">Practice questions</p>
          </div>
        </div>
        <div className="flex-shrink-0 flex items-center space-x-3">
          {completed && (
            <div className="flex items-center gap-2 text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full">
              <Check className="w-4 h-4" />
              <span>Completed</span>
            </div>
          )}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
            {count} Questions
          </div>
        </div>
      </div>
    </button>
  );
};

export default TopicCard;
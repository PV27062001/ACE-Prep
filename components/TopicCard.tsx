import React from 'react';
import { BookOpen } from 'lucide-react';

interface TopicCardProps {
  topic: string;
  count: number;
  onClick: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, count, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-transform transform-gpu hover:-translate-y-1 border border-gray-100 text-left w-full group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-br from-blue-50 to-white p-3 rounded-lg group-hover:from-blue-100 transition-colors">
            <BookOpen className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{topic}</h3>
            <p className="text-sm text-gray-500">Practice questions</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
            {count} Questions
          </div>
        </div>
      </div>
    </button>
  );
};

export default TopicCard;
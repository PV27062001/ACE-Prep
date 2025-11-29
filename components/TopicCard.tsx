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
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 text-left w-full group"
    >
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
          <BookOpen className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{topic}</h3>
          <p className="text-sm text-gray-500">{count} Questions</p>
        </div>
      </div>
    </button>
  );
};

export default TopicCard;
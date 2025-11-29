import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedOptionLabel?: string;
  onSelect: (label: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedOptionLabel, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-3">
          Question {question.id}
        </span>
        <h2 className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
          {question.text}
        </h2>
      </div>

      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedOptionLabel === option.label;
          return (
            <button
              key={option.label}
              onClick={() => onSelect(option.label)}
              className={`w-full text-left p-3 md:p-4 rounded-lg border-2 transition-transform transform-gpu flex items-start bg-white ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 shadow-md scale-100'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 hover:scale-[1.01]'
              }`}
              aria-pressed={isSelected}
            >
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full border-2 mr-3 md:mr-4 flex items-center justify-center text-xs font-bold mt-0.5 transition-all ${
                  isSelected
                    ? 'border-blue-500 bg-blue-500 text-white scale-110'
                    : 'border-gray-400 text-gray-500 bg-white'
                }`}
              >
                {option.label}
              </div>
              <span className={`text-sm md:text-base ${isSelected ? 'text-blue-900' : 'text-gray-700'}`}>
                {option.text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
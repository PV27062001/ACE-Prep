import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ResultChartProps {
  correct: number;
  incorrect: number;
  unanswered: number;
}

const ResultChart: React.FC<ResultChartProps> = ({ correct, incorrect, unanswered }) => {
  const data = [
    { name: 'Correct', value: correct, color: '#22c55e' },
    { name: 'Incorrect', value: incorrect, color: '#ef4444' },
    { name: 'Unanswered', value: unanswered, color: '#9ca3af' },
  ].filter(item => item.value > 0);

  return (
    <div className="w-full h-64 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => [`${value} Questions`, 'Count']}
            contentStyle={{ backgroundColor: 'white', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
          />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultChart;
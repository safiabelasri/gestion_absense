import React from 'react';
import Card from '../ui/Card';

const GoalChart: React.FC = () => {
  const departments = [
    { name: 'General', completed: 85 },
    { name: 'Science', completed: 70 },
    { name: 'Maths', completed: 90 },
    { name: 'Literature', completed: 60 },
    { name: 'Art', completed: 50 },
  ];

  return (
    <Card>
      <div className="text-center mb-4">
        <h3 className="text-gray-700 font-medium">Daily Goal</h3>
        <p className="text-xs text-gray-500 mt-1">All departments</p>
      </div>
      
      <div className="space-y-4">
        {departments.map((dept, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
                style={{ width: `${dept.completed}%` }}
              ></div>
            </div>
            <span className="text-xs font-medium">{dept.completed}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default GoalChart;
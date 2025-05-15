import React from 'react';
import Card from '../ui/Card';

const DepartmentChart: React.FC = () => {
  // In a real implementation, this would use a charting library like Chart.js or Recharts
  return (
    <Card className="col-span-2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-700 font-medium">Departments</h3>
      </div>
      
      <div className="flex items-center justify-center h-40">
        {/* Placeholder for the department donut chart */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-8 border-green-500 border-opacity-70"></div>
          <div 
            className="absolute inset-0 rounded-full border-8 border-transparent"
            style={{ 
              clipPath: 'polygon(50% 50%, 0% 0%, 0% 100%)',
              borderLeftColor: 'rgba(59, 130, 246, 0.7)' 
            }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-xl font-bold">65%</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="bg-gray-50 p-2 rounded flex justify-between items-center">
          <span className="text-sm text-gray-700">General</span>
          <span className="text-sm font-medium">1,800</span>
        </div>
        <div className="bg-blue-50 p-2 rounded flex justify-between items-center">
          <span className="text-sm text-gray-700">Science</span>
          <span className="text-sm font-medium">1,200</span>
        </div>
        <div className="bg-green-50 p-2 rounded flex justify-between items-center">
          <span className="text-sm text-gray-700">Maths</span>
          <span className="text-sm font-medium">800</span>
        </div>
        <div className="bg-yellow-50 p-2 rounded flex justify-between items-center">
          <span className="text-sm text-gray-700">Activity</span>
          <span className="text-sm font-medium">1,000</span>
        </div>
      </div>
    </Card>
  );
};

export default DepartmentChart;
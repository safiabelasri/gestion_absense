import React from 'react';
import Card from '../ui/Card';

const RadarChart: React.FC = () => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-700 font-medium">Attendance Report</h3>
        <span className="text-xs text-gray-500">This Month</span>
      </div>
      
      <div className="flex items-center justify-center">
        {/* Placeholder for radar chart */}
        <svg width="200" height="200" viewBox="0 0 200 200">
          <polygon 
            fill="rgba(59, 130, 246, 0.2)" 
            stroke="#3b82f6" 
            strokeWidth="2"
            points="100,30 160,60 140,130 60,130 40,60"
          />
          <polygon 
            fill="rgba(16, 185, 129, 0.2)" 
            stroke="#10b981" 
            strokeWidth="2"
            points="100,50 130,70 120,110 80,110 70,70"
          />
          <circle cx="100" cy="100" r="50" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
          <circle cx="100" cy="100" r="100" fill="none" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4" />
        </svg>
      </div>
      
      <div className="flex items-center justify-center mt-4 space-x-6">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span>
          <span className="text-xs text-gray-600">Planned Presence</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
          <span className="text-xs text-gray-600">Actual Tracking</span>
        </div>
      </div>
    </Card>
  );
};

export default RadarChart;
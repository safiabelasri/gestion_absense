import React from 'react';
import Card from '../ui/Card';

const AttendanceChart: React.FC = () => {
  // In a real implementation, this would use a charting library like Chart.js or Recharts
  return (
    <Card className="col-span-3">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-700 font-medium">Reports</h3>
        <span className="text-xs text-gray-500">Today</span>
      </div>
      
      <div className="h-48 relative">
        {/* Placeholder for the line chart */}
        <svg className="w-full h-full" viewBox="0 0 300 100">
          <polyline
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            points="0,80 20,70 40,75 60,60 80,50 100,55 120,45 140,50 160,30 180,40 200,20 220,30 240,40 260,35 280,20 300,25"
          />
          <polyline
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            points="0,90 20,85 40,80 60,75 80,70 100,65 120,70 140,65 160,60 180,65 200,55 220,60 240,55 260,50 280,45 300,50"
          />
          <polyline
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2"
            points="0,70 20,75 40,65 60,70 80,65 100,70 120,60 140,65 160,70 180,60 200,65 220,55 240,60 260,65 280,60 300,65"
          />
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>00:00</span>
          <span>03:00</span>
          <span>06:00</span>
          <span>09:00</span>
          <span>12:00</span>
          <span>15:00</span>
          <span>18:00</span>
        </div>
      </div>
    </Card>
  );
};

export default AttendanceChart;
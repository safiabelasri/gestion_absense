import React from 'react';
import Card from '../ui/Card';

interface StatCardProps {
  title: string;
  value: number;
  subValue: string;
  icon?: React.ReactNode;
  today?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  subValue,
  icon,
  today = false
}) => {
  return (
    <Card className="flex flex-col h-28">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-gray-600 font-medium">{title}</h3>
        {today && <span className="text-xs text-gray-500">Today</span>}
      </div>
      <div className="flex items-center justify-between mt-auto">
        <div>
          <p className="text-2xl font-bold text-amber-400">{value}</p>
          <p className="text-xs text-gray-500">{subValue}</p>
        </div>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
    </Card>
  );
};

export default StatCard;
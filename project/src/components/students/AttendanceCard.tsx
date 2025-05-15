import React from 'react';
import Badge from '../ui/Badge';
import { AttendanceRecord } from '../../types';

interface AttendanceCardProps {
  record: AttendanceRecord;
}

const AttendanceCard: React.FC<AttendanceCardProps> = ({ record }) => {
  const borderColor = record.status === 'Present' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500';
  
  return (
    <div className={`bg-white rounded-md shadow-sm mb-4 ${borderColor}`}>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-700">{record.date}</p>
          <Badge variant={record.status === 'Present' ? 'present' : 'absent'}>
            {record.status === 'Present' ? '● Present' : '● Absent'}
          </Badge>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-3">
          <div>
            <p className="text-xs text-gray-500 mb-1">Check In Time</p>
            <p className="text-sm font-medium">{record.checkInTime || '---'}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Check Out Time</p>
            <p className="text-sm font-medium">{record.checkOutTime || '---'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;
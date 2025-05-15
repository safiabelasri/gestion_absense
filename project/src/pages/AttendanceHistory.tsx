import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import Input from '../components/ui/Input';
import AttendanceCard from '../components/students/AttendanceCard';
import { AttendanceRecord } from '../types';

const AttendanceHistory: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock attendance records - in a real app, this would come from an API
  const mockRecords: AttendanceRecord[] = [
    { date: 'Wed, Jan 31, 2023', status: 'Present', checkInTime: '8:30 A.M.', checkOutTime: '---' },
    { date: 'Tue, Jan 30, 2023', status: 'Absent', checkInTime: '10:30 A.M.', checkOutTime: '9:01 P.M.' },
    { date: 'Mon, Jan 29, 2023', status: 'Absent', checkInTime: '---', checkOutTime: '---' },
    { date: 'Sat, Jan 27, 2023', status: 'Present', checkInTime: '8:30 A.M.', checkOutTime: '9:00 P.M.' },
    { date: 'Fri, Jan 26, 2023', status: 'Present', checkInTime: '8:30 A.M.', checkOutTime: '9:00 P.M.' },
    { date: 'Thurs, Jan 25, 2023', status: 'Absent', checkInTime: '10:30 A.M.', checkOutTime: '9:01 P.M.' },
    { date: 'Wed, Jan 24, 2023', status: 'Present', checkInTime: '8:30 A.M.', checkOutTime: '9:00 P.M.' },
    { date: 'Tue, Jan 23, 2023', status: 'Absent', checkInTime: '10:30 A.M.', checkOutTime: '9:01 P.M.' },
    { date: 'Mon, Jan 22, 2023', status: 'Present', checkInTime: '8:30 A.M.', checkOutTime: '---' },
  ];

  // Filter records based on search query
  const filteredRecords = mockRecords.filter(record =>
    record.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Attendance Details</h1>
        
        <div className="w-64">
          <Input
            placeholder="Search by date..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={Search}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredRecords.map((record, index) => (
          <AttendanceCard key={index} record={record} />
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <nav className="inline-flex rounded-md shadow">
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              className={`px-4 py-2 text-sm font-medium ${
                page === 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 focus:z-10 focus:outline-none`}
            >
              {page}
            </button>
          ))}
          <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 focus:z-10 focus:outline-none">
            ...
          </button>
        </nav>
      </div>
    </div>
  );
};

export default AttendanceHistory;
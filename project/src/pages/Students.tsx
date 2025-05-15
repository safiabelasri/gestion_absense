import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Input from '../components/ui/Input';
import StudentTable from '../components/students/StudentTable';
import Card from '../components/ui/Card';

const Students: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock student data - in a real app, this would come from an API
  const mockStudents = [
    { id: '1426392730', name: 'Nada Belachqer', department: 'Informatique', age: 20, contact: '+212 6 37 26 23 47', address: 'Blk 6 Lt 7 Japan St.', status: 'Present' },
    { id: '1426392731', name: 'Fatima Benharouse', department: 'Science', age: 21, contact: '+212 6 22 33 44 55', address: 'Apt 12, Main St.', status: 'Present' },
    { id: '1426392732', name: 'Akram Oudghiri', department: 'Mathematics', age: 22, contact: '+212 6 11 22 33 44', address: '123 College Ave.', status: 'Absent' },
    { id: '1426392733', name: 'Safia Safia', department: 'Physics', age: 20, contact: '+212 6 99 88 77 66', address: '45 University Blvd.', status: 'Present' },
    { id: '1426392734', name: 'Anas Aliky', department: 'Chemistry', age: 19, contact: '+212 6 55 44 33 22', address: '78 Lab Lane', status: 'Present' },
    { id: '1426392735', name: 'Hiba allaoui', department: 'Biology', age: 21, contact: '+212 6 33 22 11 00', address: '90 Science Park', status: 'Absent' },
    { id: '1426392736', name: 'Amal Amal', department: 'Economics', age: 22, contact: '+212 6 44 55 66 77', address: '34 Market St.', status: 'Absent' },
    { id: '1426392737', name: 'Derbich', department: 'Business', age: 20, contact: '+212 6 77 88 99 00', address: '56 Commerce Ave.', status: 'Present' },
  ];

  // Filter students based on search query
  const filteredStudents = mockStudents.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.id.includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="w-full md:w-96">
          <Input
            placeholder="Search employee..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={Search}
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <select className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Department</option>
            <option>Informatique</option>
            <option>Science</option>
            <option>Mathematics</option>
          </select>
          
          <select className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Semester</option>
            <option>First</option>
            <option>Second</option>
          </select>
          
          <select className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Filière</option>
            <option>A</option>
            <option>B</option>
          </select>
          
          <select className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Module</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <Card padding="none">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-800">Students List</h2>
              <p className="text-sm text-gray-500">September 2023</p>
            </div>
            
            {/* Calendar representation - simplified */}
            <div className="p-4 border-b border-gray-200 grid grid-cols-7 gap-1 text-center">
              {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                <div 
                  key={day} 
                  className={`p-2 text-sm ${day === 18 ? 'bg-orange-100 rounded-full text-orange-800' : ''}`}
                >
                  {day}
                </div>
              ))}
            </div>
            
            <StudentTable students={filteredStudents} />
          </Card>
        </div>
        
        <div className="w-full md:w-1/3 space-y-6">
          <Card>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Test Score activity</h3>
            <div className="h-32 relative">
              {/* Placeholder for test score line chart */}
              <svg className="w-full h-full" viewBox="0 0 300 100">
                <polyline
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2"
                  points="0,80 20,70 40,65 60,55 80,40 100,50 120,35 140,45 160,40 180,30 200,45 220,40 240,30 260,35 280,25 300,30"
                />
              </svg>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-lg font-medium text-gray-700 mb-4">Attendance</h3>
            <div className="flex justify-center">
              {/* Placeholder for attendance donut chart */}
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="15"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="15"
                    strokeDasharray="251.2"
                    strokeDashoffset="50.24"
                    transform="rotate(-90 50 50)"
                  />
                  <text
                    x="50"
                    y="50"
                    fontFamily="Arial"
                    fontSize="20"
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    80%
                  </text>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                <span className="text-xs text-gray-600">Present</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-gray-300 rounded-full mr-1"></span>
                <span className="text-xs text-gray-600">Absent</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Students;
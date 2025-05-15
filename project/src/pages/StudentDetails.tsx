import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, CheckSquare } from 'lucide-react';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { Student } from '../types';

const StudentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock student data - in a real app, this would come from an API
  const mockStudent: Student = {
    id: id || '1426392730',
    name: 'Nada Belachqr',
    department: 'Informatique',
    age: 20,
    contact: '+212 6 37 26 23 47',
    address: 'Blk 6 Lt 7 Japan St.',
    status: 'Present',
    totalAttendance: 100,
    totalHours: '64:40:40'
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
            <div>
              <h3 className="text-sm text-gray-500 mb-1">Nom</h3>
              <p className="text-gray-800 font-medium">{mockStudent.name}</p>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-500 mb-1">Département</h3>
              <p className="text-gray-800 font-medium">{mockStudent.department}</p>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-500 mb-1">Âge</h3>
              <p className="text-gray-800 font-medium">{mockStudent.age} yrs. old</p>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-500 mb-1">Status Today</h3>
              <Badge
                variant={mockStudent.status === 'Present' ? 'present' : 'absent'}
                className="capitalize"
              >
                ● {mockStudent.status}
              </Badge>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-500 mb-1">Contact</h3>
              <p className="text-gray-800 font-medium">{mockStudent.contact}</p>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-sm text-gray-500 mb-1">Address</h3>
              <p className="text-gray-800 font-medium">{mockStudent.address}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-gray-100 rounded-lg p-4 flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <CheckSquare className="text-green-600" size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{mockStudent.totalAttendance}</h3>
              <p className="text-gray-600 text-sm">Total Attendance</p>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-4 flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Clock className="text-blue-600" size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{mockStudent.totalHours}</h3>
              <p className="text-gray-600 text-sm">Total Hours</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StudentDetails;
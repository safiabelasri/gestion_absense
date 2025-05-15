import React from 'react';
import { Link } from 'react-router-dom';
import { MoreHorizontal } from 'lucide-react';
import Badge from '../ui/Badge';
import { Student } from '../../types';

interface StudentTableProps {
  students: Student[];
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200 text-gray-600 text-sm">
          <tr>
            <th className="py-3 px-4 text-left">No.</th>
            <th className="py-3 px-4 text-left">Apogee</th>
            <th className="py-3 px-4 text-left">Nom</th>
            <th className="py-3 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {students.map((student, index) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="py-3 px-4 text-gray-800">{(index + 1).toString().padStart(2, '0')}</td>
              <td className="py-3 px-4 text-gray-800">{student.id}</td>
              <td className="py-3 px-4">
                <Link to={`/students/${student.id}`} className="text-gray-800 hover:text-blue-600">
                  {student.name}
                </Link>
              </td>
              <td className="py-3 px-4">
                <Badge 
                  variant={student.status === 'Present' ? 'present' : 'absent'}
                  className="capitalize"
                >
                  {student.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
import React, { useState } from 'react';
import { FileDown, Filter } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

interface Warning {
  id: number;
  date: string;
  time: string;
  idNumber: string;
  message: string;
  status: 'Read' | 'Unread';
}

const Reports: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock warnings data
  const warnings: Warning[] = [
    {
      id: 1,
      date: '3/13/24',
      time: '9:43:53:33 AM',
      idNumber: '2020-1006DB',
      message: 'Not Working 9/43',
      status: 'Read'
    },
    {
      id: 2,
      date: '3/13/24',
      time: '10:15:22 AM',
      idNumber: '2020-1007DB',
      message: 'System Error',
      status: 'Unread'
    },
    {
      id: 3,
      date: '3/12/24',
      time: '2:30:45 PM',
      idNumber: '2020-1008DB',
      message: 'Connection Lost',
      status: 'Read'
    }
  ];

  const filteredWarnings = warnings.filter(warning =>
    warning.idNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    warning.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExport = () => {
    // Implementation for exporting data
    console.log('Exporting data...');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">List of Warnings</h1>
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleExport}
          >
            <FileDown size={18} />
            Export CSV
          </Button>
          
          <Button
            variant="outline"
            className="flex items-center gap-2"
          >
            <Filter size={18} />
            Filter
          </Button>
        </div>
      </div>

      <Card padding="none">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">No.</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Date</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Time</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Id Number</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Message</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredWarnings.map((warning, index) => (
                <tr key={warning.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-800">{index + 1}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{warning.date}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{warning.time}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{warning.idNumber}</td>
                  <td className="py-3 px-4 text-sm text-gray-800">{warning.message}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      warning.status === 'Read' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {warning.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Reports;
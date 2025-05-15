import React from 'react';
import { Users, UserCheck, UserX } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import AttendanceChart from '../components/dashboard/AttendanceChart';
import DepartmentChart from '../components/dashboard/DepartmentChart';
import GoalChart from '../components/dashboard/GoalChart';
import RadarChart from '../components/dashboard/RadarChart';

const Dashboard: React.FC = () => {
  // Mock data - in a real app, this would come from an API
  const stats = {
    present: { count: 145, percentage: '78% ATTENDED' },
    absent: { count: 145, percentage: '22% NOT PRESENT' },
    total: { count: 145, percentage: '95% ATTENDED' },
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Present" 
          value={stats.present.count} 
          subValue={stats.present.percentage} 
          icon={<UserCheck size={24} />} 
          today
        />
        <StatCard 
          title="Absent" 
          value={stats.absent.count} 
          subValue={stats.absent.percentage} 
          icon={<UserX size={24} />} 
          today
        />
        <StatCard 
          title="Attendance" 
          value={stats.total.count} 
          subValue={stats.total.percentage} 
          icon={<Users size={24} />} 
          today
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <AttendanceChart />
        <DepartmentChart />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <RadarChart />
        <GoalChart />
      </div>
    </div>
  );
};

export default Dashboard;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  FileText, 
  ClipboardList, 
  Settings, 
  LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Sidebar: React.FC = () => {
  const { logout } = useAuth();
  
  return (
    <div className="h-screen bg-white border-r border-gray-200 w-56">
      <div className="h-16 bg-green-900 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <div className="w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-500">
              <path d="M9 21V15H15V21M12 3L4 9H7V15H17V9H20L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <h1 className="text-white font-semibold text-xl ml-2">Admin</h1>
      </div>
      
      <nav className="flex flex-col p-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 rounded-md transition-colors duration-200 ${
              isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <LayoutDashboard size={20} className="mr-2" />
          <span>Dashboard</span>
        </NavLink>
        
        
        <NavLink
          to="/students"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 rounded-md transition-colors duration-200 ${
              isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <GraduationCap size={20} className="mr-2" />
          <span>Students</span>
        </NavLink>
        
        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 rounded-md transition-colors duration-200 ${
              isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <FileText size={20} className="mr-2" />
          <span>Report</span>
        </NavLink>
        
        <NavLink
          to="/activity"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 rounded-md transition-colors duration-200 ${
              isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <ClipboardList size={20} className="mr-2" />
          <span>Activity Logs</span>
        </NavLink>
        
        <div className="border-t border-gray-200 my-4"></div>
        <h3 className="text-xs font-semibold text-gray-500 px-4 mb-2">SETTINGS</h3>
        
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 rounded-md transition-colors duration-200 ${
              isActive ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'
            }`
          }
        >
          <Settings size={20} className="mr-2" />
          <span>Settings</span>
        </NavLink>
        
        <button
          onClick={logout}
          className="flex items-center py-3 px-4 rounded-md transition-colors duration-200 text-gray-700 hover:bg-gray-100"
        >
          <LogOut size={20} className="mr-2" />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
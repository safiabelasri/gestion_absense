import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bell, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { logout } = useAuth();
  const location = useLocation();
  
  // Parse the current path to create breadcrumbs
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  // Capitalize first letter of each path segment
  const formatPathName = (path: string) => {
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
        {pathSegments.map((segment, index) => (
          <React.Fragment key={index}>
            <span className="text-gray-400">/</span>
            <Link 
              to={`/${pathSegments.slice(0, index + 1).join('/')}`}
              className="text-gray-600 hover:text-gray-800"
            >
              {formatPathName(segment)}
            </Link>
          </React.Fragment>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <Bell size={20} />
        </button>
        
        <button 
          onClick={logout}
          className="text-gray-600 hover:text-gray-800 flex items-center space-x-1 py-1 px-2 rounded hover:bg-gray-100 transition-colors duration-200"
        >
          <span>Log out</span>
          <LogOut size={16} />
        </button>
      </div>
    </div>
  );
};

export default Header;
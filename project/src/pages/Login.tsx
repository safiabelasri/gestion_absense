import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, login } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const success = await login(username, password);
      if (!success) {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-green-900 relative">
        <img 
          src="https://lh3.googleusercontent.com/p/AF1QipONC6IA6-EvQlBviymgu8KFFJ_fTKqzYC7ZwC0=s1360-w1360-h1020-rw" 
          alt="University campus" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <User size={32} className="text-gray-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 uppercase">ADMIN LOGIN</h1>
            <p className="text-gray-600 mt-2">
              Login with your <span className="text-amber-500 font-medium">admin</span> credential.
            </p>
          </div>
          
          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Enter username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                icon={User}
                required
              />
            </div>
            
            <div className="mb-6">
              <Input
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" variant="success" fullWidth>
              LOGIN
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
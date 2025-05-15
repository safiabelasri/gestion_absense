import React from 'react';

interface BadgeProps {
  variant: 'present' | 'absent' | 'neutral';
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ 
  variant, 
  children,
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const variantClasses = {
    present: 'bg-green-100 text-green-800',
    absent: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
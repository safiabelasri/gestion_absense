import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'medium',
}) => {
  const paddingClasses = {
    none: 'p-0',
    small: 'p-2',
    medium: 'p-4',
    large: 'p-6',
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
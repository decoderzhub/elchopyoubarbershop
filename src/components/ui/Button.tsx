import React from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  fullWidth = false,
}) => {
  const baseStyles = 'font-medium rounded transition-all duration-300 ease-in-out inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-barber-red hover:bg-red-700 text-white border-2 border-barber-red hover:border-red-700',
    secondary: 'bg-barber-blue hover:bg-blue-700 text-white border-2 border-barber-blue hover:border-blue-700',
    outline: 'bg-transparent hover:bg-barber-red/10 text-barber-red border-2 border-barber-red',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-1 px-3',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;
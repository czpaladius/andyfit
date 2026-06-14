import React from 'react';

const Badge = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full';

  const variants = {
    primary: 'bg-[var(--color-primary)] text-[var(--color-text-primary)]',
    secondary: 'bg-[var(--color-text-secondary)] text-[var(--color-dark-background)]',
    success: 'bg-green-500 text-white', // Example, not in design system but common
    danger: 'bg-red-500 text-white',   // Example, not in design system but common
  };

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'py-3 px-6 rounded-[var(--border-radius-base)] font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--color-dark-background)]';

  const variants = {
    primary: 'bg-[var(--color-primary)] text-[var(--color-text-primary)] hover:bg-opacity-90 focus:ring-[var(--color-primary)]',
    secondary: 'bg-[var(--color-text-secondary)] text-[var(--color-dark-background)] hover:bg-opacity-80 focus:ring-[var(--color-text-secondary)]',
    outline: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-text-primary)] focus:ring-[var(--color-primary)]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
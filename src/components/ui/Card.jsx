import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-[var(--color-card-background)] rounded-[var(--border-radius-base)] p-4 shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
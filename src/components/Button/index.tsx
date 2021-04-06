import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = React.memo(({ children, ...props }) => {
  return (
    <button className="px-8 py-4 text-base leading-tight text-center text-white rounded transition duration-100 bg-orange-light px-17 md:px-20 md:py-4 hover:bg-orange-dark" {...props}>
      {children}
    </button>
  );
});

export const CVButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = React.memo(({ children, ...props }) => {
  return (
    <button className="text-base text-center text-white rounded-full transition duration-100  bg-gradient-to-r to-orange from-froomYellow py-2 px-10 md:px-14  hover:opacity-50" {...props}>
      {children}
    </button>
  );
});

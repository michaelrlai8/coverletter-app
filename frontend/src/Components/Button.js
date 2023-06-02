import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-md border border-blue-700 bg-blue-700 text-white hover:bg-white hover:text-blue-700 ${
        className ? className : 'px-5 py-1'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;

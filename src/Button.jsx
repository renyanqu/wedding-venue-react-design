import React from 'react';

const Button = ({ type = 'button', visual = 'button', onClick, children }) => {
  const buttonClass = visual === 'button' ? 'button' : 'link';

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
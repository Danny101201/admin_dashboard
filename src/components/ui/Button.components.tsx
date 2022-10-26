import React from 'react';

interface ButtonProps {
  color: string;
  bgColor: string;
  text: string;
  className?: string;
  onClick?: () => void;
  size?: 'base' | 'lg' | 'sm' | 'xs';
}
function Button({ color, bgColor, text, className, size = 'base', onClick }: ButtonProps) {
  return (
    <button
      className={`${className} p-3 hover:drop-shadow-md rounded-lg text-${size}`}
      style={{
        background: bgColor,
        color: color,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;

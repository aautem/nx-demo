import React from 'react';

type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
}>;

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="p-6 bg-blue-200 font-bold rounded" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

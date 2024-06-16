import { FC, ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      className={`${className} bg-cyan rounded-full p-4 uppercase tracking-wider text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

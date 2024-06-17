import { FC, ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  className,
  variant = 'primary',
}) => {
  const primaryClasses = 'bg-cyan text-white';
  const secondaryClasses = 'border-2 border-cyan text-cyan font-semibold';
  const buttonVariantClasses = `${variant === 'secondary' ? secondaryClasses : primaryClasses}`;

  return (
    <button
      className={`${className} ${buttonVariantClasses} rounded-full p-2 tracking-wider md:p-4`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

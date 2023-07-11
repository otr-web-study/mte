import { FC, ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

import { FC } from 'react';
import './ButtonClose.css';

interface ButtonCloseProps {
  className?: string;
  onClick: () => void;
}

const Button: FC<ButtonCloseProps> = ({ className, onClick }) => {
  return <button className={`button-close ${className}`} onClick={onClick} />;
};

export default Button;

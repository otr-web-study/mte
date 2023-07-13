import { type FC, FocusEvent } from 'react';
import './AppInput.css';

interface AppInputProps {
  className?: string;
  readonly?: boolean;
  placeholder?: string;
  onFocus: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}
const AppInput: FC<AppInputProps> = ({ className = '', readonly = false, ...props }) => {
  return <input readOnly={readonly} className={`app-input ${className}`} {...props}></input>;
};

export default AppInput;

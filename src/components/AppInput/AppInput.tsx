import { type FC, FocusEvent, ChangeEvent } from 'react';
import './AppInput.css';

interface AppInputProps {
  className?: string;
  readonly?: boolean;
  placeholder?: string;
  id?: string;
  value: string;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
const AppInput: FC<AppInputProps> = ({
  className = '',
  readonly = false,
  onFocus,
  onBlur,
  onChange,
  ...props
}) => {
  return (
    <input
      readOnly={readonly}
      className={`app-input ${className}`}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      {...props}
    ></input>
  );
};

export default AppInput;

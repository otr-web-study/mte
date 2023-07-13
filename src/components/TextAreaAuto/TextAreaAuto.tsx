import TextAreaAutosize from 'react-textarea-autosize';
import { type FC, FocusEvent, ChangeEvent } from 'react';
import './TextAreaAuto.css';

interface TextAreaAutoProps {
  className?: string;
  minRows?: number;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onBlur: () => void;
}
const TextAreaAuto: FC<TextAreaAutoProps> = ({ className, minRows = 2, ...props }) => {
  return (
    <TextAreaAutosize
      className={`textarea-auto ${className}`}
      minRows={minRows}
      {...props}
    ></TextAreaAutosize>
  );
};

export default TextAreaAuto;

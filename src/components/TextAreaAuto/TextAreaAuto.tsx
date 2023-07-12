import TextAreaAutosize from 'react-textarea-autosize';
import { type FC } from 'react';
import './TextAreaAuto.css';

interface TextAreaAutoProps {
  className?: string;
  minRows?: number;
  placeholder?: string;
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

import { FC, KeyboardEvent, useState } from 'react';
import './StretchingInput.css';

interface StretchingInputProps {
  className?: string;
}
const StretchingInput: FC<StretchingInputProps> = ({ className }) => {
  // const inputRef = useRef<HTMLTextAreaElement>(null);
  const [inputHeight, setInputHeight] = useState(50);

  const handleKeyUp = (evt: KeyboardEvent<HTMLTextAreaElement>) => {
    console.log((evt.target as HTMLTextAreaElement).scrollHeight);
    setInputHeight((evt.target as HTMLTextAreaElement).scrollHeight);
  };

  return (
    <textarea
      style={{ height: inputHeight ? `${inputHeight}px` : 'auto' }}
      className={`input ${className}`}
      onKeyUp={handleKeyUp}
    ></textarea>
  );
};

export default StretchingInput;

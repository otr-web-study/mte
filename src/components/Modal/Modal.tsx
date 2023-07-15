import { ReactNode, type FC, useEffect, useCallback } from 'react';
import './Modal.css';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const ESC_KEY = 'Escape';
const ENTER_KEY = 'Enter';

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const handleKeyboardEvent = useCallback(
    (evt: KeyboardEvent) => {
      evt.preventDefault();
      evt.stopPropagation();
      if (evt.key === ESC_KEY || evt.key === ENTER_KEY) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardEvent);

    return () => window.removeEventListener('keydown', handleKeyboardEvent);
  }, [handleKeyboardEvent]);

  return <div className="modal">{children}</div>;
};

export default Modal;

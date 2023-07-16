import { ReactNode, type FC, useEffect, useCallback, MouseEvent } from 'react';
import './Modal.css';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  className?: string;
}

const ESC_KEY = 'Escape';

const Modal: FC<ModalProps> = ({ children, className = '', onClose }) => {
  const handleModalMouseDown = (evt: MouseEvent<HTMLDivElement>) => {
    if ((evt.target as HTMLDivElement).id === 'modal') {
      onClose();
    }
  };

  const handleKeyboardEvent = useCallback(
    (evt: KeyboardEvent) => {
      if ((evt.target as HTMLInputElement).id === 'modal-input') {
        return;
      }

      evt.preventDefault();
      evt.stopPropagation();
      if (evt.key === ESC_KEY) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardEvent);

    return () => window.removeEventListener('keydown', handleKeyboardEvent);
  }, [handleKeyboardEvent]);

  return (
    <div id="modal" className={`modal ${className}`} onMouseDown={handleModalMouseDown}>
      {children}
    </div>
  );
};

export default Modal;

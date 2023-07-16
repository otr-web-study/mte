import { type FC, useState, useCallback, useEffect } from 'react';
import Modal from 'components/Modal';
import ButtonClose from 'components/ButtonClose';
import AppInput from 'components/AppInput/AppInput';
import { useMessagePreviewControls } from 'hooks/useMessagePreviewConrtols';
import { Template } from 'Types';
import './MessagePreview.css';

interface MessagePreviewProps {
  arrVarNames: string[];
  template: Template;
  onClose: () => void;
}
const MessagePreview: FC<MessagePreviewProps> = ({ template, arrVarNames, onClose }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const { variables, message, handleVariableChange } = useMessagePreviewControls(
    arrVarNames,
    template,
  );

  const handleClose = useCallback(() => {
    setIsOpened(false);
    setTimeout(() => onClose(), 300);
  }, [onClose]);

  useEffect(() => {
    setIsOpened(true);
  }, []);

  const variablesContent = Object.entries(variables).map(([variable, value]) => (
    <label className="message-preview__input-caption" key={variable}>
      {variable}
      <AppInput
        id={'modal-input'}
        value={value}
        onChange={(evt) => handleVariableChange(evt, variable)}
      />
    </label>
  ));

  return (
    <Modal onClose={handleClose} className={isOpened ? 'modal_opened' : ''}>
      <div className="message-preview">
        <header className="message-preview__header">
          <h2>Message Preview</h2>
          <ButtonClose onClick={handleClose} />
        </header>
        <main className="message-preview__container">
          <h5>Message</h5>
          <p className="message-preview__message">{message}</p>
          <h5>Variables</h5>
          <div className="message-preview__variables">{variablesContent}</div>
        </main>
      </div>
    </Modal>
  );
};

export default MessagePreview;

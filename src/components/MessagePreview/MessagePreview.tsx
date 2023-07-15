import { type FC } from 'react';
import Modal from 'components/Modal';
import ButtonClose from 'components/ButtonClose';
import { Template } from 'Types';
import './MessagePreview.css';
import AppInput from 'components/AppInput/AppInput';

interface MessagePreviewProps {
  arrVarNames: string[];
  template: Template;
  onClose: () => void;
}
const MessagePreview: FC<MessagePreviewProps> = ({ template, arrVarNames, onClose }) => {
  const variablesContent = arrVarNames.map((variable, idx) => (
    <label className="message-preview__input-caption" key={idx}>
      {`{${variable}}`}
      <AppInput value="tst" onChange={() => console.log('hey, there')} />
    </label>
  ));

  return (
    <Modal onClose={onClose}>
      <div className="message-preview">
        <header className="message-preview__header">
          <h2>Message Preview</h2>
          <ButtonClose onClick={onClose} />
        </header>
        <main className="message-preview__container">
          <h5>Message</h5>
          <p className="message-preview__message">some message</p>
          <h5>Variables</h5>
          <div className="message-preview__variables">{variablesContent}</div>
        </main>
      </div>
    </Modal>
  );
};

export default MessagePreview;

import { FC } from 'react';
import Button from 'components/Button';
import './Welcome.css';

const Welcome: FC<{ onEditorClick: () => void }> = ({ onEditorClick }) => {
  return (
    <section className="welcome-page">
      <Button className="welcome-page__editor-btn" onClick={onEditorClick}>
        Message Editor
      </Button>
    </section>
  );
};

export default Welcome;

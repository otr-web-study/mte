import { FC } from 'react';
import { Container } from 'components/Container/Container';
import Button from 'components/Button/Button';
import VariableButtonList from 'components/VariableButtonList';
import StretchingInput from 'components/StretchingInput';
import './MessageTemplateEditor.css';

interface MessageTemplateEditorProps {
  arrVarNames: string[];
}

const MessageTemplateEditor: FC<MessageTemplateEditorProps> = ({ arrVarNames }) => {
  const handleVariableButtonClick = (variable: string) => {
    console.log(variable);
  };

  return (
    <Container>
      <div className="editor">
        <h1 className="editor__title">Message Template Editor</h1>
        <p>variables</p>
        <div className="editor__condition-controls">
          <VariableButtonList arrVarNames={arrVarNames} onClick={handleVariableButtonClick} />
          <Button
            className="editor__condition-btn"
            onClick={() => {
              console.log('click');
            }}
          >
            + IF THEN ELSE
          </Button>
        </div>
        <div className="editor__template">
          <StretchingInput />
        </div>
        <div className="editor__controls">
          <Button
            className="editor__btn editor__btn_type_preview"
            onClick={() => {
              console.log('preview');
            }}
          >
            Preview
          </Button>
          <Button
            className="editor__btn editor__btn_type_save"
            onClick={() => {
              console.log('Save');
            }}
          >
            Save
          </Button>
          <Button
            className="editor__btn editor__btn_type_close"
            onClick={() => {
              console.log('clowe');
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default MessageTemplateEditor;

import { FC } from 'react';
import { Container } from 'components/Container/Container';
import Button from 'components/Button/Button';
import VariableButtonList from 'components/VariableButtonList';
import Template from 'components/Template/Template';
import { Template as ITemplate } from 'Types/Template';
import { TemplateProvider } from 'providers/TemplateProvider';
import './MessageTemplateEditor.css';

interface MessageTemplateEditorProps {
  arrVarNames: string[];
  template?: ITemplate;
  onTemplateSave: (template: ITemplate) => void;
  onClose: () => void;
}

const MessageTemplateEditor: FC<MessageTemplateEditorProps> = ({
  arrVarNames,
  template = { message: '' },
  onTemplateSave,
  onClose,
}) => {
  const handleVariableButtonClick = (variable: string) => {
    console.log(variable);
  };

  return (
    <TemplateProvider initialTemplate={template}>
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
            <Template template={template} path={[]} />
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
              onClick={() => onTemplateSave(template)}
            >
              Save
            </Button>
            <Button className="editor__btn editor__btn_type_close" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </Container>
    </TemplateProvider>
  );
};

export default MessageTemplateEditor;

import { FC } from 'react';
import { Container } from 'components/Container/Container';
import Button from 'components/Button/Button';
import VariableButtonList from 'components/VariableButtonList';
import Template from 'components/Template/Template';
import { Template as ITemplate } from 'Types/Template';
import { TemplateProvider } from 'providers/TemplateProvider';
import { useMessageEditor } from 'hooks/useMessageEditor';
import './MessageTemplateEditor.css';

interface MessageTemplateEditorProps {
  arrVarNames: string[];
  callbackSave: (template: ITemplate) => void;
  onClose: () => void;
}

interface WithTemplateProviderProps extends MessageTemplateEditorProps {
  template?: ITemplate;
}

const MessageTemplateEditor: FC<MessageTemplateEditorProps> = ({
  arrVarNames,
  callbackSave,
  onClose,
}) => {
  const { template, handleAddVariable } = useMessageEditor();

  return (
    <Container>
      <div className="editor">
        <h1 className="editor__title">Message Template Editor</h1>
        <p>Variables</p>
        <div className="editor__condition-controls">
          <VariableButtonList arrVarNames={arrVarNames} onClick={handleAddVariable} />
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
          <p>Message template</p>
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
            onClick={() => callbackSave(template)}
          >
            Save
          </Button>
          <Button className="editor__btn editor__btn_type_close" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Container>
  );
};

const WithTemplateProvider: FC<WithTemplateProviderProps> = ({ template = [], ...props }) => {
  if (!template.length) {
    template.push({ message: '', key: new Date().getTime() });
  }

  return (
    <TemplateProvider initialTemplate={template}>
      <MessageTemplateEditor {...props} />
    </TemplateProvider>
  );
};

export default WithTemplateProvider;

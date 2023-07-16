import { FC } from 'react';
import { Container } from 'components/Container/Container';
import Button from 'components/Button/Button';
import VariableButtonList from 'components/VariableButtonList';
import Template from 'components/Template/Template';
import { Template as ITemplate } from 'Types/Template';
import { TemplateProvider } from 'providers/TemplateProvider';
import { useMessageEditor } from 'hooks/useMessageEditor';
import { useMessagePreview } from 'hooks/useMessagePreview';
import MessagePreview from 'components/MessagePreview/MessagePreview';
import { getUniqueKey } from 'utils/uniqueKey';
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
  const uniqueArrVarNames = Array.from(new Set(arrVarNames));
  const { template, handleAddVariable, handleAddCondition, handleDeleteCondition } =
    useMessageEditor();

  const { isVisible: isMessagePreviewVisible, toggleMessagePreviewVisible } = useMessagePreview();

  return (
    <Container>
      <div className="editor">
        <h1 className="editor__title">Message Template Editor</h1>
        <h5>Variables</h5>
        <div className="editor__condition-controls">
          <VariableButtonList arrVarNames={uniqueArrVarNames} onClick={handleAddVariable} />
          <Button className="editor__condition-btn" onClick={handleAddCondition}>
            + IF THEN ELSE
          </Button>
        </div>
        <div className="editor__template">
          <h5>Message template</h5>
          <Template template={template} path={[]} onDeleteCondition={handleDeleteCondition} />
        </div>
        <div className="editor__controls">
          <Button
            className="editor__btn editor__btn_type_preview"
            onClick={toggleMessagePreviewVisible}
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
      {isMessagePreviewVisible && (
        <MessagePreview
          onClose={toggleMessagePreviewVisible}
          arrVarNames={uniqueArrVarNames}
          template={template}
        />
      )}
    </Container>
  );
};

const WithTemplateProvider: FC<WithTemplateProviderProps> = ({ template = [], ...props }) => {
  if (!template.length) {
    template.push({ message: '', key: getUniqueKey() });
  }

  return (
    <TemplateProvider initialTemplate={template}>
      <MessageTemplateEditor {...props} />
    </TemplateProvider>
  );
};

export default WithTemplateProvider;

import { useState } from 'react';
import Welcome from 'components/Welcome';
import MessageTemplateEditor from 'components/MessageTemplateEditor';
import { getLocalData, setLocalData } from 'utils/localData';
import './App.css';
import { Template } from 'Types/Template';

function App() {
  const [editMode, setEditMode] = useState(false);

  const arrVarNames = getLocalData<string[]>('MessageTemplateEditor/arrVarNames', [
    'firstname',
    'lastname',
    'company',
    'position',
  ]);

  const uuid = new Date().getTime();

  const template = getLocalData<Template | undefined>('MessageTemplateEditor/template', [
    {
      message: '',
      key: uuid,
      condition: {
        variable: '',
        success: [{ message: '', key: uuid + 1 }],
        fail: [{ message: '', key: uuid + 2 }],
      },
    },
    {
      message: '',
      key: uuid + 3,
    },
  ]);

  const handleSaveTemplate = (template: Template) => {
    setLocalData('MessageTemplateEditor/template', template);
  };

  const toggleEditorMode = () => setEditMode(!editMode);

  const content = editMode ? (
    <MessageTemplateEditor
      arrVarNames={arrVarNames}
      template={template}
      callbackSave={handleSaveTemplate}
      onClose={toggleEditorMode}
    />
  ) : (
    <Welcome onEditorClick={toggleEditorMode} />
  );

  return <div className="app">{content}</div>;
}

export default App;

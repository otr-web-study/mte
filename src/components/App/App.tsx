import { useState } from 'react';
import Welcome from 'components/Welcome';
import MessageTemplateEditor from 'components/MessageTemplateEditor';
import { getLocalData, setLocalData } from 'utils/localData';
import './App.css';
import { Template } from 'Types/Template';

function App() {
  const [editMode, setEditMode] = useState(false);

  const arrVarNames = getLocalData<string[]>('arrVarNames', [
    'firstname',
    'lastname',
    'company',
    'position',
  ]);

  const template = getLocalData<Template | undefined>('template', undefined);

  const handleSaveTemplate = (template: Template, arrVarNames: string[]) => {
    setLocalData('template', template);
    setLocalData('arrVarNames', arrVarNames);
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

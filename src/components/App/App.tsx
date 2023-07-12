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

  const template = getLocalData<Template | undefined>('MessageTemplateEditor/template', {
    message: '',
    condition: {
      condition: '',
      success: { message: '' },
      fail: { message: '' },
      template: { message: '' },
    },
  });

  const handleEditorClick = () => setEditMode(true);

  const content = editMode ? (
    <MessageTemplateEditor arrVarNames={arrVarNames} template={template} />
  ) : (
    <Welcome onEditorClick={handleEditorClick} />
  );

  return <div className="app">{content}</div>;
}

export default App;

import { useState } from 'react';
import Welcome from 'components/Welcome';
import MessageTemplateEditor from 'components/MessageTemplateEditor';
import { getLocalData, setLocalData } from 'utils/localData';
import './App.css';

function App() {
  const [editMode, setEditMode] = useState(false);

  const arrVarNames = getLocalData<string[]>('MessageTemplateEditor/arrVarNames', [
    'firstname',
    'lastname',
    'company',
    'position',
  ]);

  const handleEditorClick = () => setEditMode(true);

  const content = editMode ? (
    <MessageTemplateEditor arrVarNames={arrVarNames} />
  ) : (
    <Welcome onEditorClick={handleEditorClick} />
  );

  return <div className="app">{content}</div>;
}

export default App;

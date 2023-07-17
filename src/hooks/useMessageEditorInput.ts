import { ChangeEvent, FocusEvent, useContext } from 'react';
import { TemplateContext } from 'providers/TemplateProvider';
import { NestedTemplatePathKey, elementIsCondition, elementIsTemplateItem } from 'Types';

export const useMessageEditorInputs = (path: NestedTemplatePathKey[]) => {
  const context = useContext(TemplateContext);

  if (!context) {
    throw new Error('Context not initialized!');
  }

  const { activeElement, getTemplateElementByPath, setActualTemplate } = context;

  const handleInputFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    activeElement.current = { input: event.target, path };
  };

  const handleInputChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const [element] = getTemplateElementByPath(path);
    if (elementIsTemplateItem(element)) {
      element.message = evt.target.value;
    } else if (elementIsCondition(element)) {
      element.variable = evt.target.value;
    }

    setActualTemplate();
  };

  return { handleInputFocus, handleInputChange };
};

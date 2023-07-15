import { ChangeEvent, FocusEvent, useContext } from 'react';
import { TemplateContext } from 'providers/TemplateProvider';
import { NestedTemplatePathKey, elementIsTemplateItem } from 'Types';

export const useMessageEditorInputs = (path: NestedTemplatePathKey[]) => {
  const context = useContext(TemplateContext);

  if (!context) {
    throw new Error('Context not initialized!');
  }

  const { activeElement, getTemplateElementByPath, setActualTemplate } = context;

  const handleInputFocus = (
    event: FocusEvent<HTMLTextAreaElement> | FocusEvent<HTMLInputElement>,
  ) => {
    activeElement.current = { input: event.target, path };
  };

  const handleInputBlur = () => {
    // activeElement.current = undefined;
  };

  const handleInputChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const [element] = getTemplateElementByPath(path);
    if (elementIsTemplateItem(element)) {
      element.message = evt.target.value;
      setActualTemplate();
    }
  };

  return { handleInputBlur, handleInputFocus, handleInputChange };
};

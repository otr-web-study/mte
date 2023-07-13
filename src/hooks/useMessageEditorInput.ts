import { ChangeEvent, FocusEvent, useContext } from 'react';
import { TemplateContext } from 'providers/TemplateProvider';
import { NestedTemplatePathKey, elementIsTemplate } from 'Types';

export const useMessageEditorInputs = (path: NestedTemplatePathKey[]) => {
  const context = useContext(TemplateContext);

  if (!context) {
    throw new Error('Context not initialized!');
  }

  const { activeElement, getTemplateElementByPath, setActualTemplate } = context;

  const handleInputFocus = (
    event: FocusEvent<HTMLTextAreaElement> | FocusEvent<HTMLInputElement>,
  ) => {
    activeElement.current = event.target;
  };

  const handleInputBlur = () => {
    activeElement.current = undefined;
  };

  const handleInputChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const element = getTemplateElementByPath(path);
    // eslint-disable-next-line no-debugger
    // debugger;
    if (elementIsTemplate(element)) {
      element.message = evt.target.value;
      setActualTemplate();
    }
  };

  return { handleInputBlur, handleInputFocus, handleInputChange };
};

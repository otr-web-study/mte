import { useContext } from 'react';
import { TemplateContext } from 'providers/TemplateProvider';
import { TemplateItem, NestedTemplatePathKey, elementIsTemplateItem } from 'Types';

export const useMessageEditor = () => {
  const context = useContext(TemplateContext);

  if (!context) {
    throw new Error('Context not initialized!');
  }

  const { activeElement, template, getTemplateElementByPath, templateRef } = context;

  const handleAddVariable = (variable: string) => {
    const position: number = activeElement.current?.input.selectionStart || 0;
    const path: NestedTemplatePathKey[] = activeElement.current?.path || [0];
    const element = getTemplateElementByPath(path);
    if (elementIsTemplateItem(element)) {
      console.log(element.message, position, variable);
    }

    if (activeElement.current) {
      activeElement.current.input.focus();
      activeElement.current.input.selectionStart = position;
    }
  };

  return { template, handleAddVariable };
};

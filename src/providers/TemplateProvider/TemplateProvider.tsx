import { ReactNode, FC, useState, useRef } from 'react';
import {
  ActiveInput,
  Template,
  ConditionTemplate,
  ConditionPathKey,
  TemplateItem,
  elementIsTemplate,
  elementIsCondition,
  elementIsTemplateItem,
} from 'Types';
import { TemplateContext, GetTemplateElementByPath } from './TemplateContext';

interface TemplateProviderProps {
  initialTemplate: Template;
  children: ReactNode;
}
export const TemplateProvider: FC<TemplateProviderProps> = ({ initialTemplate, children }) => {
  const [template, setTemplate] = useState(structuredClone(initialTemplate));
  const activeElement = useRef<ActiveInput>();
  const templateRef = useRef<Template>(initialTemplate);

  const getTemplateElementByPath: GetTemplateElementByPath = (path) => {
    if (!path.length) return templateRef.current;

    let element: Template | ConditionTemplate | TemplateItem = templateRef.current;

    for (const currentPath of path) {
      if (elementIsTemplate(element)) {
        if (typeof currentPath !== 'number') {
          throw new Error('Wrong path.');
        }
        element = element[currentPath];
      } else if (currentPath === 'condition' && elementIsTemplateItem(element)) {
        if (!element['condition']) {
          throw new Error('Wrong path.');
        }
        element = element['condition'];
      } else if (elementIsCondition(element)) {
        element = element[currentPath as ConditionPathKey];
      }
    }

    return element;
  };

  const setActualTemplate = () => {
    setTemplate(structuredClone(templateRef.current));
  };

  return (
    <TemplateContext.Provider
      value={{ template, setActualTemplate, activeElement, templateRef, getTemplateElementByPath }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

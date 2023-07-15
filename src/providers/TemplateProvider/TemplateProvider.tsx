import { ReactNode, FC, useState, useRef } from 'react';
import {
  ActiveInput,
  Template,
  ConditionPathKey,
  elementIsTemplate,
  elementIsCondition,
  elementIsTemplateItem,
  TemplateElement,
} from 'Types';
import { TemplateContext, GetTemplateElementByPath } from './TemplateContext';
import { getUniqueKey } from 'utils/uniqueKey';

interface TemplateProviderProps {
  initialTemplate: Template;
  children: ReactNode;
}

export const TemplateProvider: FC<TemplateProviderProps> = ({ initialTemplate, children }) => {
  const [template, setTemplate] = useState(
    (): Template =>
      initialTemplate.length
        ? structuredClone(initialTemplate)
        : [{ message: '', key: getUniqueKey() }],
  );
  const activeElement = useRef<ActiveInput>();
  const templateRef = useRef<Template>(initialTemplate);

  const getTemplateElementByPath: GetTemplateElementByPath = (path) => {
    if (!path.length) return [templateRef.current, null];

    let parent: TemplateElement | null = null;
    let element: TemplateElement = templateRef.current;

    for (const currentPath of path) {
      parent = element;
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

    return [element, parent];
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

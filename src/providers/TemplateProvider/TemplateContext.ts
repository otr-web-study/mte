import { createContext, MutableRefObject } from 'react';
import { ActiveInput, Template, ConditionTemplate, NestedTemplatePathKey } from 'Types';

export interface GetTemplateElementByPath {
  (path: NestedTemplatePathKey[]): Template | ConditionTemplate;
}

export interface TemplateContextProps {
  activeElement: MutableRefObject<ActiveInput>;
  template: Template;
  templateRef: MutableRefObject<Template>;
  setActualTemplate: () => void;
  getTemplateElementByPath: GetTemplateElementByPath;
}

export const TemplateContext = createContext<TemplateContextProps | null>(null);

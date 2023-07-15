import { createContext, MutableRefObject } from 'react';
import { ActiveInput, Template, NestedTemplatePathKey, TemplateElement } from 'Types';

export interface GetTemplateElementByPath {
  (path: NestedTemplatePathKey[]): [TemplateElement, TemplateElement | null];
}

export interface TemplateContextProps {
  activeElement: MutableRefObject<ActiveInput>;
  template: Template;
  templateRef: MutableRefObject<Template>;
  setActualTemplate: () => void;
  getTemplateElementByPath: GetTemplateElementByPath;
}

export const TemplateContext = createContext<TemplateContextProps | null>(null);

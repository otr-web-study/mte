import { createContext, MutableRefObject } from 'react';
import {
  ActiveInput,
  Template,
  TemplateItem,
  ConditionTemplate,
  NestedTemplatePathKey,
} from 'Types';

export interface GetTemplateElementByPath {
  (path: NestedTemplatePathKey[]): Template | ConditionTemplate | TemplateItem;
}

export interface TemplateContextProps {
  activeElement: MutableRefObject<ActiveInput>;
  template: Template;
  templateRef: MutableRefObject<Template>;
  setActualTemplate: () => void;
  getTemplateElementByPath: GetTemplateElementByPath;
}

export const TemplateContext = createContext<TemplateContextProps | null>(null);

export interface ConditionTemplate {
  variable: string;
  success: Template;
  fail: Template;
}

export interface TemplateItem {
  key: number;
  message: string;
  condition?: ConditionTemplate;
}

export type Template = TemplateItem[];

export type ConditionPathKey = Exclude<keyof ConditionTemplate, 'variable'>;
export type TemplatePathKey = Exclude<keyof TemplateItem, 'message'>;
export type NestedTemplatePathKey = ConditionPathKey | TemplatePathKey | number;

export type TemplateElement = Template | TemplateItem | ConditionTemplate;

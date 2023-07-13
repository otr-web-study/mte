export interface ConditionTemplate {
  variable: string;
  success: Template;
  fail: Template;
  template: Template;
}

export interface Template {
  message: string;
  condition?: ConditionTemplate;
}

export type ConditionPathKey = Exclude<keyof ConditionTemplate, 'variable'>;
export type TemplatePathKey = Exclude<keyof Template, 'message'>;
export type NestedTemplatePathKey = ConditionPathKey | TemplatePathKey;

export interface ConditionTemplate {
  condition: string;
  success: Template;
  fail: Template;
  template: Template;
}

export interface Template {
  message: string;
  condition?: ConditionTemplate;
}

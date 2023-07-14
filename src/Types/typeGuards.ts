import { Template, ConditionTemplate, TemplateItem, TemplateElement } from './Template';

export const elementIsTemplate = (element: TemplateElement): element is Template => {
  return Array.isArray(element);
};

export const elementIsCondition = (element: TemplateElement): element is ConditionTemplate => {
  return !Array.isArray(element) && (element as ConditionTemplate).variable !== undefined;
};

export const elementIsTemplateItem = (element: TemplateElement): element is TemplateItem => {
  return !Array.isArray(element) && (element as TemplateItem).message !== undefined;
};

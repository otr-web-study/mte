import { Template, ConditionTemplate } from './Template';

export const elementIsTemplate = (element: Template | ConditionTemplate): element is Template => {
  return (element as Template).message !== undefined;
};

export const elementIsCondition = (
  element: Template | ConditionTemplate,
): element is ConditionTemplate => {
  return (element as ConditionTemplate).template !== undefined;
};

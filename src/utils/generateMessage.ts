import {
  Template,
  TemplateItem,
  ConditionTemplate,
  elementIsTemplateItem,
  elementIsCondition,
} from 'Types';

export const generateMessage = (template: Template, variables: Record<string, string>) => {
  const pattern = new RegExp(`(${Object.keys(variables).join('|')})`, 'g');

  const evaluateExpression = (expression: string) =>
    expression.replace(pattern, (key) => variables[key] || '');

  const buildMessage = (template: Template | TemplateItem | ConditionTemplate): string => {
    if (elementIsTemplateItem(template)) {
      return `${evaluateExpression(template.message)}${
        template.condition ? buildMessage(template.condition) : ''
      }`;
    } else if (elementIsCondition(template)) {
      const evaluatedVariable = evaluateExpression(template.variable).trim();
      return evaluatedVariable ? buildMessage(template.success) : buildMessage(template.fail);
    } else {
      let message = '';
      for (let ind = 0; ind < template.length; ind++) {
        message += buildMessage(template[ind]);
      }
      return message;
    }
  };

  return buildMessage(template);
};

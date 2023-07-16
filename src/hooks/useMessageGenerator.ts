import {
  Template,
  TemplateItem,
  ConditionTemplate,
  elementIsTemplateItem,
  elementIsCondition,
} from 'Types';

const cache: Record<string, string> = {};

export const useMessageGenerator = () => {
  const generateMessage = (template: Template, variables: Record<string, string>) => {
    const buildMessage = (template: Template | TemplateItem | ConditionTemplate): string => {
      if (elementIsTemplateItem(template)) {
        return `${template.message}${template.condition ? buildMessage(template.condition) : ''}`;
      } else if (elementIsCondition(template)) {
        return `${
          variables[template.variable]
            ? buildMessage(template.success)
            : buildMessage(template.fail)
        }`;
      } else {
        let message = '';
        for (let ind = 0; ind < template.length; ind++) {
          message += buildMessage(template[ind]);
        }
        return message;
      }
    };

    const templateToMessage = () => {
      const key = `${JSON.stringify(template)}:${Object.entries(variables)
        .map(([key, value]) => (value ? key : '-'))
        .join('')}`;

      if (cache[key]) {
        return cache[key];
      }

      cache[key] = buildMessage(template);
      return cache[key];
    };

    const variabledMessage = templateToMessage();
    const pattern = new RegExp(`(${Object.keys(variables).join('|')})`, 'g');

    let message = variabledMessage.replace(pattern, (key) => variables[key] || '');

    /*
    Не у верен по поводу нижележащей строчки кода, в условиях есть пункт:
    "могут отсутствовать неообходимые переменные - должны интерпретироваться, как пустые значения".
    Для красивого решения этой проблемы на вход данной функции нужно получать дополнительный параметр - 
    список всех позможных корректных переменных, тогда можно было бы отсутствующие в значениях,
    но присутствующие в шаблоне переменные обрабатывать более точно. Однако, раз в условиях не оговорены дополнительные 
    параметры, равно как и возможность хранить вместе с шаблоном список использованных в нем переменных, использую этот,
    весьма сомнительный подход, с полным осознанием того, что если в сообщении будут использоваться слова обрамленные фигурными
    скобками, в итоговое сообщение они не попадут.
    */
    message = message.replace(/{(\w+)}/g, '');
    return message;
  };

  return generateMessage;
};

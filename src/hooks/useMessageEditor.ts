import { useContext } from 'react';
import { TemplateContext } from 'providers/TemplateProvider';
import {
  elementIsTemplateItem,
  elementIsCondition,
  elementIsTemplate,
  TemplateElement,
  ConditionTemplate,
  NestedTemplatePathKey,
} from 'Types';
import { getUniqueKey } from 'utils/uniqueKey';

interface InfoActiveElement {
  position: number;
  element: TemplateElement;
  parentElement: TemplateElement | null;
  input?: HTMLTextAreaElement | HTMLInputElement;
}

export const useMessageEditor = () => {
  const context = useContext(TemplateContext);

  if (!context) {
    throw new Error('Context not initialized!');
  }

  const { activeElement, template, getTemplateElementByPath, setActualTemplate } = context;

  const getInfoActiveElement = (): InfoActiveElement => {
    const position = activeElement.current?.input.selectionStart || 0;
    const path = activeElement.current?.path || [0];
    const [element, parentElement] = getTemplateElementByPath(path);
    const input = activeElement.current?.input;

    return {
      position,
      element,
      parentElement,
      input,
    };
  };

  const getNewCondition = (): ConditionTemplate => {
    return {
      variable: '',
      success: [{ message: '', key: getUniqueKey() }],
      fail: [{ message: '', key: getUniqueKey() }],
    };
  };

  const handleAddVariable = (variable: string) => {
    const { position, element, input } = getInfoActiveElement();
    const text = `{${variable}}`;

    if (elementIsCondition(element)) {
      element.variable = `${element.variable.substring(
        0,
        position,
      )}${text}${element.variable.substring(position)}`;
    } else if (elementIsTemplateItem(element)) {
      element.message = `${element.message.substring(
        0,
        position,
      )}${text}${element.message.substring(position)}`;
    } else {
      return;
    }

    setActualTemplate();

    if (input) {
      input.focus();
      setTimeout(() => {
        input.selectionStart = position + text.length;
        input.selectionEnd = position + text.length;
      });
    }
  };

  const handleAddCondition = () => {
    const { position, element, parentElement, input } = getInfoActiveElement();

    if (input) {
      input.focus();
    }

    if (!elementIsTemplateItem(element) || !parentElement || !elementIsTemplate(parentElement)) {
      return;
    }

    const messageBefor = element.message.substring(0, position);
    const messgeAfter = element.message.substring(position);
    const index = parentElement.indexOf(element);
    element.message = messageBefor;
    parentElement.splice(index + 1, 0, {
      message: messgeAfter,
      key: getUniqueKey(),
      condition: element.condition,
    });
    element.condition = getNewCondition();

    setActualTemplate();
  };

  const handleDeleteCondition = (path: NestedTemplatePathKey[]) => {
    const [element, parentElement] = getTemplateElementByPath(path.slice(0, path.length - 1));

    if (!elementIsTemplateItem(element) || !parentElement || !elementIsTemplate(parentElement)) {
      return;
    }

    const index = parentElement.indexOf(element);
    const nextElement = parentElement[index + 1];

    if (!nextElement) {
      return;
    }

    element.condition = nextElement.condition;
    element.message = `${element.message}${nextElement.message}`;
    parentElement.splice(index + 1, 1);

    setActualTemplate();
  };

  return { template, handleAddVariable, handleAddCondition, handleDeleteCondition };
};

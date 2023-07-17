import { ChangeEvent, useState } from 'react';
import { generateMessage } from 'utils/generateMessage';
import { Template } from 'Types';

export const useMessagePreviewControls = (arrVarNames: string[], template: Template) => {
  const [variables, setVariables] = useState(() =>
    Object.fromEntries(arrVarNames.map((item) => [`{${item}}`, ''])),
  );

  const [message, setMessage] = useState(() => generateMessage(template, variables));

  const handleVariableChange = (evt: ChangeEvent<HTMLInputElement>, variable: string) => {
    const newVariables = {
      ...variables,
      [variable]: evt.target.value,
    };
    setVariables(newVariables);
    setMessage(() => generateMessage(template, newVariables));
  };

  return { variables, message, handleVariableChange };
};

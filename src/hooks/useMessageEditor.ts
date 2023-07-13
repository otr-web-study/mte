import { useContext } from 'react';
import { TemplateContext } from 'providers/TemplateProvider';

export const useMessageEditor = () => {
  const context = useContext(TemplateContext);

  if (!context) {
    throw new Error('Context not initialized!');
  }

  const { activeElement } = context;

  return { activeElement };
};

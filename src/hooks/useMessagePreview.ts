import { useState } from 'react';

export const useMessagePreview = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMessagePreviewVisible = () => {
    setIsVisible(!isVisible);
  };

  return { isVisible, toggleMessagePreviewVisible };
};

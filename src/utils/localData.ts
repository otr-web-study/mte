export const getLocalData = <T>(key: string, defaultValue: T): T => {
  const localData = localStorage.getItem(key);
  if (!localData) {
    return defaultValue;
  }

  return JSON.parse(localData) || defaultValue;
};

export const setLocalData = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

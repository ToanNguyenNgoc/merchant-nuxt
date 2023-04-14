type StorageType = 'session' | 'local';
type StorageReturnValue = {
  getItem: (key: string, type?: StorageType) => string;
  setItem: (key: string, value: string, type?: StorageType) => boolean;
  removeItem: (key: string, type?: StorageType) => void;
};
export function storage(): StorageReturnValue {
  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();
  const storageType = (type?: StorageType): 'localStorage' | 'sessionStorage' => `${type ?? 'session'}Storage`;

  const getItem = (key: string, type?: StorageType): string => {
    const storageType: 'localStorage' | 'sessionStorage' = `${type ?? 'session'}Storage`;
    return isBrowser ? window[storageType][key] : '';
  };
  const setItem = (key: string, value: string, type?: StorageType): boolean => {
    if (isBrowser) {
      window[storageType(type)].setItem(key, value);
      return true;
    }
    return false;
  };
  const removeItem = (key: string, type?: StorageType): void => {
    window[storageType(type)].removeItem(key);
  };
  const actionStorage = { getItem, setItem, removeItem }
  return actionStorage
};
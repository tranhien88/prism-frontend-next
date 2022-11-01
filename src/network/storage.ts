export enum StorageKeys {
    TOKEN = 'token',
    USER_INFO = 'userInfo'
  }
  
  export const removeStorage = (key: StorageKeys) => {
    localStorage.removeItem(key)
  }
  
  export const clearStorage = () => {
    localStorage.clear()
  }
  
  export const getLocalStorage = <Type>(key: StorageKeys): Type => {
    return JSON.parse(localStorage.getItem(key) || '{}') as Type
  }
  
  export const setLocalStorage = <T extends object>(key: StorageKeys, value: T) => {
    localStorage.setItem(key, JSON.stringify(value))
  }
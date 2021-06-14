import { useState } from 'react';

const useLocalStorage = (key, initValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initValue
        } catch (error) {
            console.log(error)
            return initValue
        }
    })

    const setValue = (value) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // save state
            setStoredValue(valueToStore);
            // save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue];
}

export default useLocalStorage
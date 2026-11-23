
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {

  // Load saved data when the application starts
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const savedValue = window.localStorage.getItem(key);

      // If saved data exists, use it
      if (savedValue !== null) {
        return JSON.parse(savedValue);
      }

      // Otherwise, use the initial sample tasks
      return initialValue;

    } catch (error) {
      console.error("Error loading tasks from localStorage:", error);
      return initialValue;
    }
  });

  // Save data whenever tasks change
  useEffect(() => {
    try {
      window.localStorage.setItem(
        key,
        JSON.stringify(storedValue)
      );

    } catch (error) {
      console.error("Error saving tasks to localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;

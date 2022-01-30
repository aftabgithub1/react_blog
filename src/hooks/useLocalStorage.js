import { useState, useEffect } from "react";

const useLocalStorage = (keyName, initialData) => {
  const [items, setItems] = useState(initialData);

  
  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(items));
  }, [items]);

  let savedItems = JSON.parse(localStorage.getItem(keyName));
  if(savedItems != null) {
    const setNewItems = () => {
      savedItems.map(savedItem => {
        // let newItems =  [...savedItem, "Mango"];
        localStorage.setItem(keyName, JSON.stringify(savedItem));
        return setItems(savedItem);
      });
    }
    setNewItems();
  }

  return [items, setItems]; 
}

export default useLocalStorage; 
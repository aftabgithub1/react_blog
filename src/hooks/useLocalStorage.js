import { useState, useEffect } from "react";

const useLocalStorage = (key, initial) => {
  const [items, setItems] = useState(initial);

  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [items]);

  const saved = localStorage.getItem(key);
  if(saved != null) {
    const setNewItems = () => {
      let savedItems = JSON.parse(saved);
      savedItems.map(savedItem => {
        let newItems =  [...savedItem, "Mango"];
        localStorage.setItem(key, JSON.stringify(newItems));
        return setItems(newItems);
      });
    }
    setNewItems();
  }

  return [items, setItems]; 
}

export default useLocalStorage; 
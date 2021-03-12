import { useState } from 'react';

export function useList(initialList) {
  const [items, setItems] = useState([...initialList]);

  const appendItem = item => {
    setItems([
      ...items,
      { id: Math.max(...items.map(c => c.id), 0) + 1, ...item },
    ]);
  };

  const replaceItem = item => {
    const itemIndex = items.findIndex(c => c.id === item.id);
    const newCars = [...items];
    newCars[itemIndex] = item;
    setItems(newCars);
  };

  const removeItem = itemId => {
    setItems(items.filter(c => c.id !== itemId));
  };

  return [items, appendItem, replaceItem, removeItem];
}

import { useState, useEffect } from 'react';

export function useList(url) {
  const [items, setItems] = useState([]);

  useEffect(
    () => {
      fetch(url)
        .then(res => res.json())
        .then(items => {
          setItems(items);
        });
    },
    [url] /* only run on the initial load */,
  );

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

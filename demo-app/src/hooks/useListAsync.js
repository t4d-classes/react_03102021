import { useState, useEffect, useCallback } from 'react';

export function useList(url) {
  const [items, setItems] = useState([]);

  const refreshItems = useCallback(() => {
    fetch(url)
      .then(res => res.json())
      .then(items => {
        setItems(items);
      });
  }, [url]);

  const appendItem = useCallback(
    item => {
      return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      }).then(() => refreshItems());
    },
    [url, refreshItems],
  );

  const replaceItem = useCallback(
    item => {
      return fetch(`${url}/${encodeURIComponent(item.id)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      }).then(() => refreshItems());
    },
    [url, refreshItems],
  );

  const removeItem = useCallback(
    itemId => {
      return fetch(`${url}/${encodeURIComponent(itemId)}`, {
        method: 'DELETE',
      }).then(() => refreshItems());
    },
    [url, refreshItems],
  );

  useEffect(
    () => {
      refreshItems();
    },
    [refreshItems] /* only run on the initial load */,
  );

  return [items, appendItem, replaceItem, removeItem, refreshItems];
}

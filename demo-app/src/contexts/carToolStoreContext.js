import { createContext, useContext } from 'react';

import { useCarToolStore } from '../hooks/useCarToolStore';

const carToolStoreContext = createContext();

export function CarToolStoreProvider(props) {
  return (
    <carToolStoreContext.Provider value={useCarToolStore([...props.cars])}>
      {props.children}
    </carToolStoreContext.Provider>
  );
}

export function useCarToolStoreContext() {
  // retrieve the car tool store object off of the context
  return useContext(carToolStoreContext);
}

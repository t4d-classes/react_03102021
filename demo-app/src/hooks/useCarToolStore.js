import { useState, useCallback, useMemo } from 'react';

import { useList } from './useListAsync';

const sortAsc = (colName = 'id') => {
  console.log('re-sorting');
  return (a, b) => {
    if (a[colName] > b[colName]) {
      return 1;
    } else if (a[colName] < b[colName]) {
      return -1;
    } else {
      return 0;
    }
  };
};

export function useCarToolStore() {
  const [sortColName, setSortColName] = useState('id');
  const [cars, appendCar, replaceCar, removeCar] = useList(
    'http://localhost:3050/cars',
  );
  const [editCarId, setEditCarId] = useState(-1);

  const sortCol = useCallback(colName => {
    setSortColName(colName);
  }, []);

  const addCar = useCallback(
    car => {
      appendCar(car);
      setEditCarId(-1);
    },
    [appendCar],
  );

  const saveCar = useCallback(
    car => {
      replaceCar(car);
      setEditCarId(-1);
    },
    [replaceCar],
  );

  const deleteCar = useCallback(
    carId => {
      removeCar(carId);
      setEditCarId(-1);
    },
    [removeCar],
  );

  const editCar = useCallback(carId => {
    setEditCarId(carId);
  }, []);

  const cancelCar = useCallback(() => {
    setEditCarId(-1);
  }, []);

  return {
    cars: useMemo(() => [...cars].sort(sortAsc(sortColName)), [
      cars,
      sortColName,
    ]),
    editCarId,
    sortColName,
    sortCol,
    addCar,
    saveCar,
    deleteCar,
    editCar,
    cancelCar,
  };
}

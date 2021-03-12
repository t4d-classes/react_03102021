import { useState } from 'react';

import { useList } from './useListAsync';

export function useCarToolStore() {
  const [sortColName, setSortColName] = useState('id');
  const [cars, appendCar, replaceCar, removeCar] = useList(
    'http://localhost:3050/cars',
  );
  const [editCarId, setEditCarId] = useState(-1);

  const sortCol = colName => {
    setSortColName(colName);
  };

  const addCar = car => {
    appendCar(car);
    setEditCarId(-1);
  };

  const saveCar = car => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const editCar = carId => {
    setEditCarId(carId);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return {
    cars,
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
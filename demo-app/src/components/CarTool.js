import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import { useList } from '../hooks/useList';

export function CarTool(props) {
  const [sortColName, setSortColName] = useState('id');
  const [cars, appendCar, replaceCar, removeCar] = useList([...props.cars]);
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

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onSortCol={sortCol}
        sortColName={sortColName}
        onEditCar={setEditCarId}
        onDeleteCar={deleteCar}
        onSaveCar={saveCar}
        onCancelCar={() => setEditCarId(-1)}
      />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}

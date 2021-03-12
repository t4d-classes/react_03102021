import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import { useCarToolStore } from '../hooks/useCarToolStore';

export function CarTool(props) {
  const {
    cars,
    editCarId,
    sortCol,
    sortColName,
    editCar,
    cancelCar,
    addCar,
    saveCar,
    deleteCar,
  } = useCarToolStore([props.cars]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable
        cars={cars}
        editCarId={editCarId}
        onSortCol={sortCol}
        sortColName={sortColName}
        onEditCar={editCar}
        onDeleteCar={deleteCar}
        onSaveCar={saveCar}
        onCancelCar={cancelCar}
      />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}

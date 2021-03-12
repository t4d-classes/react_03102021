import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export function CarTool(props) {
  const [sortColName, setSortColName] = useState('id');
  const [cars, setCars] = useState([...props.cars]);
  const [editCarId, setEditCarId] = useState(-1);

  const sortCol = colName => {
    setSortColName(colName);
  };

  const addCar = car => {
    setCars([...cars, { id: Math.max(...cars.map(c => c.id), 0) + 1, ...car }]);
    setEditCarId(-1);
  };

  const saveCar = car => {
    const carIndex = cars.findIndex(c => c.id === car.id);
    const newCars = [...cars];
    newCars[carIndex] = car;
    setCars(newCars);
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
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

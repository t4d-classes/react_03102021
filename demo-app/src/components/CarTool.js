import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export function CarTool(props) {
  const [sortColName, setSortColName] = useState('id');
  const [cars, setCars] = useState([...props.cars]);

  const sortCol = colName => {
    setSortColName(colName);
  };

  const addCar = car => {
    setCars([...cars, { id: Math.max(...cars.map(c => c.id), 0) + 1, ...car }]);
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onSortCol={sortCol} sortColName={sortColName} onDeleteCar={deleteCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
}

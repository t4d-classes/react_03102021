import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

export function CarTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => props.onSortCol('id')}>Id</th>
          <th onClick={() => props.onSortCol('make')}>Make</th>
          <th onClick={() => props.onSortCol('model')}>Model</th>
          <th onClick={() => props.onSortCol('year')}>Year</th>
          <th onClick={() => props.onSortCol('color')}>Color</th>
          <th onClick={() => props.onSortCol('price')}>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map(car =>
          props.editCarId === car.id ? (
            <CarEditRow
              car={car}
              key={car.id}
              onSaveCar={props.onSaveCar}
              onCancelCar={props.onCancelCar}
            />
          ) : (
            <CarViewRow
              car={car}
              key={car.id}
              onEditCar={props.onEditCar}
              onDeleteCar={props.onDeleteCar}
            />
          ),
        )}
      </tbody>
    </table>
  );
}

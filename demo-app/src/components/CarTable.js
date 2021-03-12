import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

const sortAsc = (colName = 'id') => {
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
        {[...props.cars]
          .sort(sortAsc(props.sortColName))
          .map(car =>
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

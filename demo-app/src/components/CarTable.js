import PropTypes from 'prop-types';

import { CarEditRow } from './CarEditRow';
import { CarViewRow } from './CarViewRow';

export function CarTable({
  cars,
  editCarId,
  onSortCol,
  onSaveCar,
  onCancelCar,
  onEditCar,
  onDeleteCar,
}) {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => onSortCol('id')}>Id</th>
          <th onClick={() => onSortCol('make')}>Make</th>
          <th onClick={() => onSortCol('model')}>Model</th>
          <th onClick={() => onSortCol('year')}>Year</th>
          <th onClick={() => onSortCol('color')}>Color</th>
          <th onClick={() => onSortCol('price')}>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car =>
          editCarId === car.id ? (
            <CarEditRow
              car={car}
              key={car.id}
              onSaveCar={onSaveCar}
              onCancelCar={onCancelCar}
            />
          ) : (
            <CarViewRow
              car={car}
              key={car.id}
              onEditCar={onEditCar}
              onDeleteCar={onDeleteCar}
            />
          ),
        )}
      </tbody>
    </table>
  );
}

CarTable.defaultProps = {
  cars: [],
  editCarId: -1,
};

CarTable.propTypes = {
  cars: PropTypes.array,
  editCarId: PropTypes.number,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
  onSortCol: PropTypes.func.isRequired,
};

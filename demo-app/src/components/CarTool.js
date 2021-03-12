import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

import { useCarToolStoreContext } from '../contexts/carToolStoreContext';

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
  } = useCarToolStoreContext();

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

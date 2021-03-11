import { useState } from 'react';

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

export function CarTool(props) {
  const [sortColName, setSortColName] = useState('id');
  const [cars, setCars] = useState([...props.cars]);

  const [carForm, setCarForm] = useState({
    make: '',
    model: '',
    year: NaN,
    color: '',
    price: NaN,
  });

  const change = e => {
    setCarForm({
      ...carForm,
      [e.target.name]:
        e.target.type === 'number'
          ? parseFloat(e.target.value)
          : e.target.value,
    });
  };

  const sortCol = colName => {
    setSortColName(colName);
  };

  const addCar = () => {
    setCars([
      ...cars,
      { id: Math.max(...cars.map(c => c.id), 0) + 1, ...carForm },
    ]);

    setCarForm({
      make: '',
      model: '',
      year: NaN,
      color: '',
      price: NaN,
    });
  };

  console.log(carForm);

  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortCol('id')}>Id</th>
            <th onClick={() => sortCol('make')}>Make</th>
            <th onClick={() => sortCol('model')}>Model</th>
            <th onClick={() => sortCol('year')}>Year</th>
            <th onClick={() => sortCol('color')}>Color</th>
            <th onClick={() => sortCol('price')}>Price</th>
          </tr>
        </thead>
        <tbody>
          {[...cars].sort(sortAsc(sortColName)).map(car => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form>
        <div>
          <label htmlFor="make-input">Make</label>
          <input
            type="text"
            id="make-input"
            name="make"
            value={carForm.make}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="model-input">Model</label>
          <input
            type="text"
            id="model-input"
            name="model"
            value={carForm.model}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="year-input">Year</label>
          <input
            type="number"
            id="year-input"
            name="year"
            value={isNaN(carForm.year) ? '' : carForm.year}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="color-input">Color</label>
          <input
            type="text"
            id="color-input"
            name="color"
            value={carForm.color}
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="price-input">Price</label>
          <input
            type="number"
            id="price-input"
            name="price"
            value={isNaN(carForm.price) ? '' : carForm.price}
            onChange={change}
          />
        </div>
        <button type="button" onClick={addCar}>
          Add Car
        </button>
      </form>
    </>
  );
}

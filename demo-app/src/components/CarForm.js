import { useState } from 'react';

export function CarForm(props) {
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

  const submitCar = () => {
    props.onSubmitCar({ ...carForm });

    setCarForm({
      make: '',
      model: '',
      year: NaN,
      color: '',
      price: NaN,
    });
  };

  return (
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
      <button type="button" onClick={submitCar}>
        {props.buttonText}
      </button>
    </form>
  );
}

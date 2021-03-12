import { useState } from 'react';

export function ColorForm(props) {

  // data model / stateful logic

  const [colorForm, setColorForm] = useState({
    name: '',
    hexcode: '',
  });

  const change = e => {
    setColorForm({
      ...colorForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitColor = () => {
    props.onSubmitColor({ ...colorForm });

    setColorForm({
      name: '',
      hexcode: '',
    });
  };

  // render logic

  return (
    <form>
      <div>
        <label htmlFor="name-input">Name</label>
        <input
          type="text"
          id="name-input"
          value={colorForm.name}
          name="name"
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="hexcode-input">Hexcode</label>
        <input
          type="text"
          id="hexcode-input"
          name="hexcode"
          value={colorForm.hexcode}
          onChange={change}
        />
      </div>
      <button type="button" onClick={submitColor}>
        {props.buttonText}
      </button>
    </form>
  );
}

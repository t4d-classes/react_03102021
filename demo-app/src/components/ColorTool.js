import { useState } from 'react';

import { ToolHeader } from './ToolHeader';

export function ColorTool(props) {
  const [colors, setColors] = useState(props.colors.concat());

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

  const addColor = () => {
    setColors([
      ...colors,
      { ...colorForm, id: Math.max(...colors.map(c => c.id), 0) + 1 },
    ]);
    setColorForm({
      name: '',
      hexcode: '',
    });
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ul>
        {colors.map(color => (
          <li key={color.id}>
            {color.name} {color.hexcode}
          </li>
        ))}
      </ul>
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
        <button type="button" onClick={addColor}>
          Add Color
        </button>
      </form>
    </>
  );
}

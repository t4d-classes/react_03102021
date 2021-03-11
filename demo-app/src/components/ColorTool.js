import { useState } from "react";

export function ColorTool(props) {
  // render logic

  const [colorForm, setColorForm] = useState(
    {
      name: "",
      hexcode: "",
    } /* initial form state */
  );

  const colorListItems = props.colors.map((color) => (
    <li key={color.id}>
      {color.name} {color.hexcode}
    </li>
  ));

  // are similar to the methods on the class
  const change = (e) => {
    setColorForm({
      ...colorForm, // copy the properties from the original object

      // updates the property of the field I am typing into
      [e.target.name]: e.target.value,
    });
  };

  console.log(colorForm);

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>{colorListItems}</ul>
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
      </form>
    </>
  );
}

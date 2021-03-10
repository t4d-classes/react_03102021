export function ColorTool() {

  // model data

  const colors = [
    { id: 1, name: "red", hexcode: "ff0000" },
    { id: 2, name: "blue", hexcode: "0000ff" },
    { id: 3, name: "green", hexcode: "00ff00" },
    { id: 4, name: "orange", hexcode: "ffff00" },
    { id: 5, name: "yellow", hexcode: "00ffff" },
  ];

  // render logic

  const colorListItems = colors.map((color) => (
    <li key={color.id}>
      {color.name} {color.hexcode}
    </li>
  ));

  return (
    <>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>{colorListItems}</ul>
    </>
  );
}

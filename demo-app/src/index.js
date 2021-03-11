import { render } from "react-dom";

import { ColorTool } from "./components/ColorTool";

// model data

const colorList = [
  { id: 1, name: "red", hexcode: "ff0000" },
  { id: 2, name: "blue", hexcode: "0000ff" },
  { id: 3, name: "green", hexcode: "00ff00" },
  { id: 4, name: "orange", hexcode: "ffff00" },
  { id: 5, name: "yellow", hexcode: "00ffff" },
];
//                            props
// React.createElement(Color, { colors: colorList } )

render(
  <>
    <ColorTool colors={colorList} />
  </>,
  document.querySelector("#root")
);

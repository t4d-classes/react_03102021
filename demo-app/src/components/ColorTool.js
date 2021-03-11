import { useState } from 'react';
import { ColorForm } from './ColorForm';

import { ToolHeader } from './ToolHeader';

export function ColorTool(props) {
  const [colors, setColors] = useState(props.colors.concat());



  const addColor = color => {
    setColors([
      ...colors,
      { ...color, id: Math.max(...colors.map(c => c.id), 0) + 1 },
    ]);
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
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );
}

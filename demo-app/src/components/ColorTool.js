import { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

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
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );
}

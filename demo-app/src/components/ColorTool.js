import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

import { useColorToolStore } from '../hooks/useColorToolStore';

export function ColorTool(props) {
  const { colors, addColor } = useColorToolStore([...props.colors]);

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );
}

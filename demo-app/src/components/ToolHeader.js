import { memo } from 'react';

export const ToolHeader = memo(function ToolHeader(props) {
  return (
    <header>
      <h1>{props.headerText}</h1>
    </header>
  );
});

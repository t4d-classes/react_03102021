import { memo } from 'react';

export const ToolHeader = memo(function ToolHeader(props) {
  return (
    <header>
      <h1>{props.headerText ? props.headerText : "Some Tool"}</h1>
    </header>
  );
});

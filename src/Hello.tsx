import * as React from 'react';
import * as ReactDom from 'react-dom';

export interface Props {
  name: string;
}

export default function Hello(props: Props) {
  return (
    <div>
      <h1>Hello {props.name}!!</h1>
    </div>
  );
}

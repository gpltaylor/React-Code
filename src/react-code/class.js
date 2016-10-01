import React from 'react';
import Const from './const';
import Block from './block';

var Class = (props) => {

  return (
    <pre>class {props.name} <Block>
      {props.children}
    </Block></pre>
  )
}

export default Class;

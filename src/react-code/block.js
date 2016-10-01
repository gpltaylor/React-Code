import React from 'react';
import Const from './const';

var Block = (props) => {
  const {openBrace, closeBrace} = Const;

  return (
    <null>{openBrace}
      {props.children}
    {closeBrace}</null>
  )
}

export default Block;

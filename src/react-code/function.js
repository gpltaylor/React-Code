import React from 'react';
import Const from './const';

var Function = (props) => {
  var {name, children, scope} = props;
  const {openBrace, closeBrace} = Const;

  return (
    <pre>
      {scope == 'var' ? 'var ' : ''}
      {scope == 'this' ? 'this.' : ''}
      {scope == 'none' ? '' : ''}
      {name} = () => {openBrace}
      {children}
      {closeBrace}
    </pre>
  )
}

export default Function;

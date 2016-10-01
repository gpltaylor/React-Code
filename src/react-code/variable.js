import React from 'react';

var Variable = ({name = 'x', defaultValue = null, scope = 'var'}) => {
  if(defaultValue != null) {
    defaultValue = typeof defaultValue == "number" ? defaultValue : `'${defaultValue}'`;
  }

  return (
    <pre>
    {scope == 'this' ? 'this.' : 'var '}
    {name}{
      defaultValue != null
        ? ` = ${defaultValue}`
        : scope == 'this' ? ` = ${name}` : ''
    };</pre>
  )
}

export default Variable;

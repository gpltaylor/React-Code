import React from 'react';

var Return = (props) => {
  const {name, scope} = props;

  return <null>
    return {scope == 'this' ? 'this.' : ''}{name};
  </null>
}

export default Return;

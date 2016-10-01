import React from 'react';
import leftPad from 'left-pad'; // Don't tell anyone

var Apply = (props) => {
  const {obj, method, result} = props;
  const args = React.Children.map(props.children, x => {
    var {defaultValue} = x.props;
    var item = `'${defaultValue}'`;
    return item;
  });

  return <null>
    var {result ? result + ' = ' : ''}{obj}.{method}({ args ? leftPad(args, null, ',') : ''});
  </null>
}

export default Apply;

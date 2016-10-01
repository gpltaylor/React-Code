import React from 'react';
import leftPad from 'left-pad'; // Don't tell anyone

var CreateInstance = (props) => {
  const {name, type} = props;
  const args = React.Children.map(props.children, x => {
    var {defaultValue, delimiter} = x.props;
    var item = `'${defaultValue}'`;
    return item;
  });

  return <null>
    var {name} = new {type}({leftPad(args, null, ',')});
  </null>
}

export default CreateInstance;

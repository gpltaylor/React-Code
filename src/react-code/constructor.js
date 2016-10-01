import React from 'react';
import Const from './const';
import Block from './block';
import leftPad from 'left-pad'; // Don't tell anyone


var Constructor = (props) => {
  const items = React.Children.map(props.children, x => x.props.name);
  return <pre>constructor({leftPad(items, null, ',')}) <Block>
    {props.children}
  </Block></pre>
}

export default Constructor;

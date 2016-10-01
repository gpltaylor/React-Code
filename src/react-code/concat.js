import React from 'react';
import Const from './const';
import leftPad from 'left-pad'; // Don't tell anyone

/*
 * LeftPad is no-ones friend, but here its little hack does not work
 * TODO: Trim the leading space
 */

var Concat = (props) => {
  const {openBrace, closeBrace} = Const;
  const {children, delimiter, name} = props;
  const items = React.Children.map(children, x => {
    var {name, scope} = x.props;
    var item = '$' + openBrace + (scope == 'this' ? 'this.' : '') + name + closeBrace;
    return item;
  });

  return (
    <null>
      var {name} = `{items.map(item => leftPad(item, item.length+1, delimiter))}`;
    </null>
  )
}

export default Concat;

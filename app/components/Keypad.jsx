import React from 'react';

import Key from 'Key';

const Keypad = props => (
  <div className="keypad">
    <Key className="clear" type="function" value="clear" {...props}>AC</Key>
    <Key type="function" value="negate" {...props}>&plusmn;</Key>
    <Key type="function" value="percent" {...props}>%</Key>
    <Key type="operator" value="/" {...props}>&divide;</Key>
    <Key type="number" value="7" {...props}>7</Key>
    <Key type="number" value="8" {...props}>8</Key>
    <Key type="number" value="9" {...props}>9</Key>
    <Key type="operator" value="*" {...props}>&times;</Key>
    <Key type="number" value="4" {...props}>4</Key>
    <Key type="number" value="5" {...props}>5</Key>
    <Key type="number" value="6" {...props}>6</Key>
    <Key type="operator" value="-" {...props}>-</Key>
    <Key type="number" value="1" {...props}>1</Key>
    <Key type="number" value="2" {...props}>2</Key>
    <Key type="number" value="3" {...props}>3</Key>
    <Key type="operator" value="+" {...props}>+</Key>
    <Key className="keypad__btn--grow" type="number" value="0" {...props}>0</Key>
    <Key type="number" value="." {...props}>.</Key>
    <Key type="function" value="=" {...props}>=</Key>
  </div>
);

export default Keypad;

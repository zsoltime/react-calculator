import React from 'react';

import Key from 'Key';

const Keypad = (props) => {
  return (
    <div className="keypad">
      <Key className="clear" type="function" value="clear">AC</Key>
      <Key type="function" value="negate">&plusmn;</Key>
      <Key type="function" value="percent">%</Key>
      <Key type="operator" value="/">&divide;</Key>
      <Key type="number" value="7">7</Key>
      <Key type="number" value="8">8</Key>
      <Key type="number" value="9">9</Key>
      <Key type="operator" value="*">&times;</Key>
      <Key type="number" value="4">4</Key>
      <Key type="number" value="5">5</Key>
      <Key type="number" value="6">6</Key>
      <Key type="operator" value="-">-</Key>
      <Key type="number" value="1">1</Key>
      <Key type="number" value="2">2</Key>
      <Key type="number" value="3">3</Key>
      <Key type="operator" value="+">+</Key>
      <Key className="keypad__btn--grow" type="number" value="0">0</Key>
      <Key type="number" value=".">.</Key>
      <Key type="function" value="=">=</Key>
    </div>
  );
};

export default Keypad;

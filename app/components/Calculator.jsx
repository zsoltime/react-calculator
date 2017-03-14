import React, { Component } from 'react';

import Keypad from 'Keypad';
import Display from 'Display';

class Calculator extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }
  handleKeydown(e) {
    console.log(e.which);
  }
  render() {
    return (
      <div>
        <h1>Calculator</h1>
        <Display />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;

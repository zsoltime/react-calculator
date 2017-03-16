import React, { Component } from 'react';

import Keypad from 'Keypad';
import Display from 'Display';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      expression: '',
      result: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keyup', this.handleInput);
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleInput);
  }
  handleInput(e) {
    const input = e.key ? e.key : e;
    if (input === 'Escape' || input === 'clear') {
      this.setState({
        expression: '',
        result: 0,
      });
    }
    if (input.match(/[0-9+-/*]/)) {
      this.setState(prevState => ({
        expression: `${prevState.expression}${input}`,
      }), () => {
        if (input.match(/[0-9]/)) {
          this.calculate();
        }
      });
    }
  }
  calculate() {
    this.setState({
      result: eval(this.state.expression),
    });
  }
  render() {
    return (
      <div className="calculator">
        <Display
          expression={this.state.expression}
          result={this.state.result}
        />
      <Keypad onClickEvent={this.handleInput} />
      </div>
    );
  }
}

export default Calculator;

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
    // should be a function outside of this class
    function newExpression(input, { expression }) {
      if (input === 'Escape' || input === 'clear') {
        return '';
      } else if (input === 'Backspace') {
        return expression.slice(0, -1);
      } else if (input.match(/[\d]/)) {
        // if expression is zero, don't add more number, just swap it
        if (expression === '0') {
          return input;
        }

        return `${expression}${input}`;
      } else if (input === '.') {
        if (expression.length === 0) {
          return '0.';
        }
        // if last char is an operator, add a leading zero
        if (expression.slice(-1).match(/[+\-*/]/)) {
          return `${expression}0.`;
        }
        // check if last number has a leading zero
        const fromIndex = expression.search(/\d*\.?\d*$/);

        // there is already a dot in the last number
        if (expression.indexOf('.', fromIndex) > -1) {
          return expression;
        }

        return `${expression}${input}`;
      } else if (input.match(/[+\-*/]/)) {
        if (expression.length === 0) {
          return `0${input}`;
        }
        // if last character is an operator, swap it
        if (expression.slice(-1).match(/[+\-*/.]/)) {
          return `${expression.slice(0, -1)}${input}`;
        }

        return `${expression}${input}`;
      }
      // if there is no match, just return the current expression
      return expression;
    }

    this.setState(prevState => ({
      expression: newExpression(e.key ? e.key : e, prevState),
    }), this.calculate);
  }
  calculate() {
    // check if last character is non-digit, if it is, remove
    this.setState((prevState) => {
      if (!prevState.expression) {
        return { result: 0 };
      } else if (prevState.expression.slice(-1).match(/\D/)) {
        return {
          result: prevState.result,
        };
      }
      return {
        // eslint-disable-next-line no-eval
        result: eval(prevState.expression),
      };
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

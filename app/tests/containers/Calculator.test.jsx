import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Calculator from 'Calculator';
import Keypad from 'Keypad';
import Display from 'Display';

describe('<Calculator />', () => {
  it('should exist', () => {
    expect(Calculator).toExist();
  });

  describe('render', () => {
    it('should render a Keypad and a Display component', () => {
      const calculator = shallow(<Calculator />);

      expect(calculator.find(Keypad).length).toBe(1);
      expect(calculator.find(Display).length).toBe(1);
    });
  });

  describe('calculate', () => {
    it('should evaluate expression and update result state', () => {
      const calculator = shallow(<Calculator />);
      const expression = '54+41-2*9+4/2';
      // eslint-disable-next-line no-eval
      const expectedResult = eval(expression);

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });
  });

  describe('expression state', () => {
    it('should update expression state on click events', () => {
      const calculator = shallow(<Calculator />);
      const keyValue = '5';

      expect(calculator.state().expression).toBe('');

      calculator.instance().handleInput(keyValue);
      expect(calculator.state().expression).toBe(keyValue);
    });

    it('should update expression state on keyup events', () => {
      const calculator = shallow(<Calculator />);
      const event = {
        key: '7',
      };

      expect(calculator.state().expression).toBe('');

      calculator.instance().handleInput(event);
      expect(calculator.state().expression).toBe(event.key);
    });

    it('should keep chaining numbers and operators', () => {
      const calculator = shallow(<Calculator />);
      const instance = calculator.instance();

      const keys = ['1', '2', '3', '.', '4', '5', '+', '1'];
      const expectedExpression = keys.join('');

      expect(calculator.state().expression).toBe('');

      keys.forEach((key) => { instance.handleInput(key); });
      expect(calculator.state().expression).toBe(expectedExpression);
    });

    it('should clear the last character of the expression on hitting backspace', () => {
      const calculator = shallow(<Calculator />);
      const instance = calculator.instance();

      const expression = '4313';

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      instance.handleInput('clear');
      expect(calculator.state().expression).toBe('');
    });

    it('should clear expression on clicking on AC button', () => {
      const calculator = shallow(<Calculator />);
      const instance = calculator.instance();

      const expression = '4313';

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      instance.handleInput('clear');
      expect(calculator.state().expression).toBe('');
    });

    it('should clear expression when pressing Esc button on keyboard', () => {
      const calculator = shallow(<Calculator />);
      const instance = calculator.instance();

      const event = { key: 'Escape' };
      const expression = '4313';

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      instance.handleInput(event);
      expect(calculator.state().expression).toBe('');
    });

    it('should only allow numbers, decimal point and operators to be added to the expression', () => {
      const calculator = shallow(<Calculator />);
      const instance = calculator.instance();
      const keys = [
        '1', '2', '1', '.', 'a', '[', 'z', '3', '-', '4', '+', '3', '*', '0',
        '/', '2', 'j', 'k', 'l', 'm', 'n', 'o', 'p', '5', 'q', 'r'];
      const expectedExpression = '121.3-4+3*0/25';

      expect(calculator.state().expression).toBe('');

      keys.forEach((key) => { instance.handleInput(key); });
      expect(calculator.state().expression).toBe(expectedExpression);
    });

    it('should not allow to add more than one decimal point to a number', () => {
      const calculator = shallow(<Calculator />);
      const instance = calculator.instance();
      const keys = ['1', '2', '.', '3', '4', '.', '5', '*', '1'];
      const expectedExpression = '12.345*1';

      expect(calculator.state().expression).toBe('');

      keys.forEach((key) => { instance.handleInput(key); });
      expect(calculator.state().expression).toBe(expectedExpression);
    });

    it('should replace the last operator if there is already one there', () => {
      const calculator = shallow(<Calculator />);
      const instance = calculator.instance();

      const keys = ['1', '2', '1', '.', '3', '3', '+', '-', '/'];
      const expectedExpression = '121.33/';

      expect(calculator.state().expression).toBe('');

      keys.forEach((key) => { instance.handleInput(key); });
      expect(calculator.state().expression).toBe(expectedExpression);
    });
    it('should not add more digits if there is a leading zero');
    it('should limit the digits of every number in expression');
    it('should limit the digits of every number in expression');
  });

  describe('addition', () => {
    it('should add two positive integers', () => {
      const calculator = shallow(<Calculator />);

      const expression = '120+240';
      const expectedResult = 360;

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });

    it('should add an integer to positive floating point number', () => {
      const calculator = shallow(<Calculator />);
      const expression = '120+240.05';
      const expectedResult = 360.05;

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });

    it('should add a negative floating point number to a negative integer', () => {
      const calculator = shallow(<Calculator />);
      const expression = '-120+-240.05';
      const expectedResult = -360.05;

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });

    it('should add two floating point numbers', () => {
      const calculator = shallow(<Calculator />);
      const expression = '12.01+24.005';
      const expectedResult = 36.015;

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });

    it('should add an integer and zero', () => {
      const calculator = shallow(<Calculator />);
      const expression = '12+0';
      const expectedResult = 12;

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });

    it('should add a negative integer and zero', () => {
      const calculator = shallow(<Calculator />);
      const expression = '-7+0';
      const expectedResult = -7;

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });
  });

  describe('subtraction', () => {
    it('should subtract two positive integers', () => {
      const calculator = shallow(<Calculator />);
      const expression = '123-23';
      const expectedResult = 100;

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });

    it('should subtract an integer from a positive floating point number', () => {
      const calculator = shallow(<Calculator />);
      const expression = '123.45-23.25';
      const expectedResult = 100.2;

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });

    it('should subtract a negative integer from a negative floating point number');

    it('should subtract two floating point numbers');

    it('should subtract zero from an integer', () => {
      const calculator = shallow(<Calculator />);
      const expression = '200-0';
      const expectedResult = 200;

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });

    it('should subtract an integer from zero', () => {
      const calculator = shallow(<Calculator />);
      const expression = '0-100';
      const expectedResult = -100;

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });

    it('should subtract a floating point number from zero', () => {
      const calculator = shallow(<Calculator />);
      const expression = '0-23.25';
      const expectedResult = -23.25;

      expect(calculator.state().result).toBe(0);

      calculator.setState({ expression });
      expect(calculator.state().expression).toBe(expression);

      calculator.instance().calculate();
      expect(calculator.state().result).toBe(expectedResult);
    });
  });
  describe('multiplication', () => {});
  describe('division', () => {});
});

// 1.01 + 1.01

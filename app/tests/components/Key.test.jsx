import React from 'react';
import expect from 'expect';
import { render, mount } from 'enzyme';

import Key from 'Key';

describe('<Key />', () => {
  it('should exist', () => {
    expect(Key).toExist();
  });

  describe('render', () => {
    it('should render a button', () => {
      const key = render(<Key value="1" onClickEvent={f => f}>1</Key>);
      const button = key.find('button');

      expect(button.length).toBe(1);
    });

    it('should render a child element', () => {
      const key = render(
        <Key value="+" onClickEvent={f => f}>+</Key>
      );
      const button = key.find('button');

      expect(button.text()).toBe('+');
    });

    it('should add class name passed via props', () => {
      const className = 'keypad__btn--test';
      const key = render(
        <Key value="1" className={className} onClickEvent={f => f}>1</Key>
      );
      const button = key.find('button');

      expect(button.hasClass(className)).toBe(true);
    });

    it('should call a callback function when clicked', () => {
      const spy = expect.createSpy();
      const value = '5';
      const key = mount(
        <Key value={value} onClickEvent={spy}>{value}</Key>
      );
      const button = key.find('.keypad__btn');

      button.simulate('click');

      expect(spy).toHaveBeenCalledWith(value);
    });
  });
});

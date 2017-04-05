import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Keypad from 'Keypad';
import Key from 'Key';

describe('<Keypad />', () => {
  it('should exist', () => {
    expect(Keypad).toExist();
  });

  describe('render', () => {
    it('should render 19 Key components', () => {
      const keypad = shallow(<Keypad onClickEvent={f => f} />);
      const keys = keypad.find(Key);

      expect(keys.length).toBe(19);
    });
  });
});

import React from 'react';
import expect from 'expect';
import { render, shallow } from 'enzyme';

import Display from 'Display';
import FormattedNumber from 'FormattedNumber';

describe('<Display />', () => {
  it('should exist', () => {
    expect(Display).toExist();
  });

  describe('render', () => {
    it('should display the result', () => {
      const result = 10;
      const display = render(<Display result={result} expression="" />);
      const actualText = display.find('.display__result').text();

      expect(actualText).toBe('10');
    });

    it('should display a formatted result', () => {
      const result = 123456.789;
      const display = shallow(<Display result={result} expression="" />);

      expect(display.find(FormattedNumber).length).toBe(1);
    });

    it('should display the expression', () => {
      const expression = '5+5';
      const result = 10;
      const display = render(
        <Display result={result} expression={expression} />
      );
      const actualText = display.find('.display__expression').text();

      expect(actualText).toBe(expression);
    });
  });
});

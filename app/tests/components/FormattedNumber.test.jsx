import React from 'react';
import expect from 'expect';
import { render } from 'enzyme';

import FormattedNumber from 'FormattedNumber';

describe('<FormattedNumber />', () => {
  it('should exist', () => {
    expect(FormattedNumber).toExist();
  });

  it('should throw a TypeError if prop is not a number', () => {
    const number = 'string';
    const formattedNumber = () => {
      render(<FormattedNumber number={number} />);
    };
    expect(formattedNumber).toThrow(TypeError);
  });

  it('should render a language sensitive representation of a number', () => {
    const number = 1234567.89;
    const formattedNumber = render(
      <FormattedNumber number={number} locale="en-GB" />
    );
    const actualText = formattedNumber.find('span').text();

    expect(actualText).toBe('1,234,567.89');
  });
});

jest.mock('../style.css', () => jest.fn());

import { shallow } from 'enzyme';
import * as React from 'react';
import Header from '../index';

describe('<Header />', () => {
  it('should render a header', () => {
    const renderedComponent = shallow(
      <Header />,
    );
    expect(renderedComponent.find('header').length).toEqual(1);
  });
});

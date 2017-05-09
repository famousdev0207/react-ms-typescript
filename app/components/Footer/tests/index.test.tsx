/**
 * Testing our Footer component
 */
jest.mock('../style.css', () => jest.fn());

import { shallow } from 'enzyme';
import * as React from 'react';
import Footer from '../index';

describe('<Footer />', () => {
  it('should render the Footer', () => {
    const renderedComponent = shallow(
      <Footer />,
    );
    expect(renderedComponent.find('footer').length).toEqual(1);
  });
});

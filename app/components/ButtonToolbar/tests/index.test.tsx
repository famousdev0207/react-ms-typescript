/**
 * Testing our ButtonToolbar component
 */

import { mount } from 'enzyme';
import * as React from 'react';

import ButtonToolbar from '../index';

const className = 'btn-toolbar';
const children = (<span>Test</span>);
const renderComponent = (props = {}) => mount(
  <ButtonToolbar className={className} {...props}>
    {children}
  </ButtonToolbar>,
);

describe('<ButtonToolbar />', () => {
  it('should render a <div> tag if no route is specified', () => {
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('div').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').prop('className')).toBeDefined();
  });
});

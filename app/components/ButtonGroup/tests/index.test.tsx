/**
 * Testing our ButtonGroup component
 */

import { mount } from 'enzyme';
import * as React from 'react';

import ButtonGroup from '../index';

const className = 'btn-group';
const children = (<button>Test</button>);
const renderComponent = (props = {}) => mount(
  <ButtonGroup className={className} {...props}>
    {children}
  </ButtonGroup>,
);

describe('<ButtonGroup />', () => {
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

/**
 * Testing our Button component
 */

import { mount } from 'enzyme';
import * as React from 'react';

import Button from '../index';

const className = 'btn';
const onClick = () => null;
const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => mount(
  <Button className={className} {...props}>
    {children}
  </Button>,
);

describe('<Button />', () => {
  it('should render a <button> tag if no route is specified', () => {
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should render a <button> tag to change route if the handleRoute prop is specified', () => {
    const renderedComponent = renderComponent({ onClick });
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onClick: onClickSpy });
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button').prop('className')).toBeDefined();
  });

  it('should not adopt a type attribute when rendering a button', () => {
    const type = 'submit';
    const renderedComponent = renderComponent({ onClick, type });
    expect(renderedComponent.find('button').prop('type')).toBeUndefined();
  });
});

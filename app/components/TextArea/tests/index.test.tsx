/**
 * Testing our TextArea component
 */
jest.mock('../style.css', () => jest.fn());

import { mount } from 'enzyme';
import * as React from 'react';
import TextArea from '../index';

const placeholder = 'Test';
const renderComponent = (props: {}) => mount(
  <TextArea {...props} />,
);

describe('<TextArea />', () => {
  it('should render a <textarea> tag if no route is specified', () => {
    const renderedComponent = renderComponent({ placeholder });
    expect(renderedComponent.find('textarea').length).toEqual(1);
  });

  it('should handle blur events', () => {
    const onBlur = jest.fn();
    const renderedComponent = renderComponent({ onBlur });
    renderedComponent.find('textarea').simulate('blur');
    expect(onBlur).toHaveBeenCalled();
  });

  it('blur events should not have been called', () => {
    const onBlur = jest.fn();
    const renderedComponent = renderComponent({ placeholder });
    renderedComponent.find('textarea').simulate('blur');
    expect(onBlur).toHaveBeenCalledTimes(0);
  });

  it('should handle change events', () => {
    const onChange = jest.fn();
    const renderedComponent = renderComponent({ onChange });
    renderedComponent.find('textarea').simulate('change');
    expect(onChange).toHaveBeenCalled();
  });

  it('change events should not have been called', () => {
    const onChange = jest.fn();
    const renderedComponent = renderComponent({ placeholder });
    renderedComponent.find('textarea').simulate('change');
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it('should handle keydown events', () => {
    const onKeyDown = jest.fn();
    const renderedComponent = renderComponent({ onKeyDown });
    renderedComponent.find('textarea').simulate('keydown');
    expect(onKeyDown).toHaveBeenCalled();
  });

  it('keydown events should not have been called', () => {
    const onKeyDown = jest.fn();
    const renderedComponent = renderComponent({ placeholder });
    renderedComponent.find('textarea').simulate('keydown');
    expect(onKeyDown).toHaveBeenCalledTimes(0);
  });

  it('should not adopt a type attribute when rendering a textarea', () => {
    const type = 'submit';
    const renderedComponent = renderComponent({ placeholder });
    expect(renderedComponent.find('textarea').prop('type')).toBeUndefined();
  });
});

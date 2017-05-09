/**
 * Testing our MainSection component
 */
jest.mock('../style.css', () => jest.fn());
jest.mock('../../TextArea/style.css', () => jest.fn());

import { mount } from 'enzyme';
import * as React from 'react';
import * as LanguageActions from '../../../actions/language';

import MainSection, { IMainSectionProps } from '../index';

const handleTranslate = jest.fn();
const actions: typeof LanguageActions = {
  translate: handleTranslate,
};
const language: ILanguage = {
  completed: false,
  source: 'kr',
  target: 'en',
  text: '안녕',
};
const renderComponent = (props: IMainSectionProps) => mount(
  <MainSection actions={actions} language={language} {...props} />,
);

describe('<MainSection />', () => {
  it('should render a <button> tag if no route is specified', () => {
    const renderedComponent = renderComponent({ actions, language });
    expect(renderedComponent.find('section').length).toEqual(1);
  });

  it('should handle click events', () => {
    const renderedComponent = renderComponent({ actions, language });
    renderedComponent.find('#btnTranslate').simulate('click');
    expect(handleTranslate).toHaveBeenCalled();
  });

  it('should not adopt a type attribute when rendering a section', () => {
    const type = 'submit';
    const renderedComponent = renderComponent({ actions, language });
    expect(renderedComponent.find('section').prop('type')).toBeUndefined();
  });
});

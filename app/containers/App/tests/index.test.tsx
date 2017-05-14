/**
 * Testing our App comtainer
 */
jest.mock('../../../components/Header/style.css', () => jest.fn());
jest.mock('../../../components/Footer/style.css', () => jest.fn());
jest.mock('../../../components/TextArea/style.css', () => jest.fn());
jest.mock('../../../components/MainSection/style.css', () => jest.fn());

import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import Footer from '../../../components/Footer/index';
import Header from '../../../components/Header/index';
import configureStore from '../../../store';
import { App, mapDispatchToProps } from '../index';

describe('<App />', () => {
  let store;

  beforeAll(() => {
    store = configureStore(browserHistory);
  });

  const props = {
    actions: null,
    language: '',
    location: null,
    params: null,
    route: null,
    routeParams: null,
    router: null,
    routes: null,
  };

  it('should render the Header', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );
    expect(renderedComponent.contains(<Header />)).toEqual(true);
  });

  it('should render the Footer', () => {
    const renderedComponent = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>,
    );
    expect(renderedComponent.contains(<Footer />)).toEqual(true);
  });
});

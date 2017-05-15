/**
 * Test store addons
 */

import { browserHistory } from 'react-router';
import configureStore from '../index';

describe('store', () => {
  let store;

  beforeAll(() => {
    store = configureStore(browserHistory);
  });

  describe('configureStore', () => {
    it('should contain getState function', () => {
      expect(typeof store.getState).toBe('function');
    });

    it('should handle hot option', () => {
      // module.hot = true;
      store = configureStore(browserHistory);
      expect(module.hot).toBe(true);
    });
  });
});

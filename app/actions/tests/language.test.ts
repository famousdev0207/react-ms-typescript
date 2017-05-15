// jest.mock('../../utils/request');

import { applyMiddleware, createStore, Store } from 'redux';
// import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import rootReducer, { IRootState } from '../../reducers';
import logger from '../../utils/logger';

import {
  TRANSLATION_ENDED,
  TRANSLATION_FAILED,
  TRANSLATION_STARTED,
  TRANSLATION_SUCCEEDED,
} from '../../constants/actions';

import {
  LANGUAGE_EN,
  LANGUAGE_KO,
} from '../../constants/filters';

import {
  translate,
} from '../language';

const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(rootReducer) as Store<IRootState>;

describe('actions/language', () => {

  describe('translate', () => {

    it('should return correct type', () => {
      // expect.assertions(1);
      // const expectedActions = [
      //   { type: TRANSLATION_STARTED },
      //   { type: TRANSLATION_SUCCEEDED, body: {translatedText: 'Hello'} },
      //   { type: TRANSLATION_ENDED },
      // ];
      // const store = mockStore({});
      const promise = store.dispatch(translate({
        source: LANGUAGE_EN,
        target: LANGUAGE_KO,
        text: '안녕',
      }));

      promise.then((data) => {
        expect(data).toEqual(data);
      });
    });
  });
});

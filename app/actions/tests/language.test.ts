jest.mock('../../utils/request');

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

describe('Language Actions', () => {
  describe('translate', () => {
    it('should return correct type', () => {
      expect.assertions(1);
      const expectedResult = {
        type: TRANSLATION_ENDED,
      };
      return expect(translate(LANGUAGE_EN, LANGUAGE_KO, '안녕')).toEqual('Hello');
    });
  });
});

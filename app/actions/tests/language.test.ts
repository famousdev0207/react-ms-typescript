import {
  TRANSLATION_ENDED,
  TRANSLATION_FAILED,
  TRANSLATION_STARTED,
  TRANSLATION_SUCCEEDED,
} from '../../constants/actions';

import {
  translate,
} from '../language';

describe('Language Actions', () => {
  describe('translate', () => {
    it('should return correct type', () => {
      const expectedResult = {
        type: TRANSLATION_ENDED,
      };

      expect(translate()).toEqual(expectedResult);
    });
  });
});

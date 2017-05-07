import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';
import { logger } from '../../common/utils/logging';
import * as Actions from '../constants/actions';
import request from '../utils/request';

export const translate = createActionThunk<ITranslation>(Actions.TRANSLATION, async (args, store) => {
  const source = args.source;
  const target = args.target;
  const text = args.text;
  logger.debug(`source: ${source}, target: ${target}, text: ${text}`);
  return await request('/api/language/translate', {
    body: JSON.stringify({
      source,
      target,
      text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
});

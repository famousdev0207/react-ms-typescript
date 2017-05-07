import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';
import { logger } from '../../common/utils/logging';
import * as Actions from '../constants/actions';
import request from '../utils/request';

export const translate = createActionThunk<ITranslation>(Actions.TRANSLATION, async (args, store) => {
  const source = args.source;
  const target = args.target;
  const text = args.text;
  const body = JSON.stringify({
    source,
    target,
    text,
  });
  logger.debug(body);
  return await request('/api/v1/language/translate', {
    body,
    compress: true,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
});

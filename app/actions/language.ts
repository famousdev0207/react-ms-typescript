import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';
import * as Actions from '../constants/actions';
import { post } from '../utils/http';

export const translate = createActionThunk<ITranslation>(Actions.TRANSLATION, async (args, store) => {
  const body = JSON.stringify(args);
  return await post('/api/v1/language/translate', {
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
});

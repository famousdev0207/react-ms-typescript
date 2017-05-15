import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';
import * as Actions from '../constants/actions';
import { post } from '../utils/request';

const prefix = '/api/v1/language';

export const translate = createActionThunk(Actions.TRANSLATION, (args, store) => {
  const body = JSON.stringify(args);
  return post(`${prefix}/translate`, {
    body,
    headers: {
      'Content-Type': 'application/json',
    },
  });
});

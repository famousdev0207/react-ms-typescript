import { createAction } from 'redux-actions';
import { createActionThunk } from 'redux-thunk-actions';
import * as Actions from '../constants/actions';
import request from '../utils/request';

export const translate = createActionThunk<ITranslation>(Actions.TRANSLATION, () => request('', ''));
// export const doTranslation = createAction<ITranslation>(Actions.DO_TRANSLATION);
// export const completeTranslation = createAction<ITranslation>(Actions.COMPLETE_TRANSLATION);

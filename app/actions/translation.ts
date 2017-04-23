import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const doTranslation = createAction<ITranslation>(Actions.DO_TRANSLATION);
export const completeTranslation = createAction<ITranslation>(Actions.COMPLETE_TRANSLATION);

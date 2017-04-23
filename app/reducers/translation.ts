import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: TranslationStoreState = {
  completed: false,
  text: '',
};

export default handleActions<TranslationStoreState, ITranslation>({
  [Actions.DO_TRANSLATION]: (state, action) => {
    return {
      completed: false,
      ...action.payload,
    };
  },
  [Actions.COMPLETE_TRANSLATION]: (state, action) => {
    return {
      completed: true,
      ...state};
  },
}, initialState);

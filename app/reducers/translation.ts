import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: TranslationStoreState = {
  completed: false,
  text: '',
};

export default handleActions<TranslationStoreState, ITranslation>({
  [Actions.TRANSLATION_STARTED]: (state, action) => {
    return {
      completed: false,
      ...action.payload,
    };
  },
  [Actions.TRANSLATION_FAILED]: (state, action) => {
    return {
      completed: true,
      ...state};
  },
  [Actions.TRANSLATION_ENDED]: (state, action) => {
    return {
      completed: true,
      ...state};
  },
}, initialState);

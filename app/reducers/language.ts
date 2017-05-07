import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: LanguageStoreState = {
  completed: false,
  source: '',
  target: '',
  text: '',
  translatedText: '',
};

export default handleActions<LanguageStoreState, ILanguage>({
  [Actions.TRANSLATION_STARTED]: (state, action) => {
    return {
      completed: false,
      ...state,
    };
  },
  [Actions.TRANSLATION_SUCCEEDED]: (state, action) => {
    const x = {
      completed: true,
      ...state,
      translatedText: action.payload.translatedText};
    return x;
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

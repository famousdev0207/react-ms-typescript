import { RouteActions, routerReducer as routing } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';
import translation from './translation';

export interface IRootState {
  routing: RouteActions;
  translation: TranslationStoreState;
}

export default combineReducers<IRootState>({
  routing,
  translation,
});

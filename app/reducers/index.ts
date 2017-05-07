import { RouteActions, routerReducer as routing } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';
import language from './language';

export interface IRootState {
  routing: RouteActions;
  language: LanguageStoreState;
}

export default combineReducers<IRootState>({
  routing,
  language,
});

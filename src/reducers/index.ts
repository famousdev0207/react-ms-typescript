import { RouteActions, routerReducer as routing } from "react-router-redux";
import { combineReducers, Reducer } from "redux";
import todos from "./todos";

export interface IRootState {
  routing: RouteActions;
  todos: TodoStoreState;
}

export default combineReducers<IRootState>({
  routing,
  todos,
});

import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { logger } from '../middleware';
import rootReducer, { IRootState } from '../reducers';

export default function configureStore(history, initialState?: IRootState): Store<IRootState> {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;
  const middlewares: Middleware[] = [
    logger,
    routerMiddleware(history),
    thunk,
  ];
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(create);
  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<IRootState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { logger } from '../middleware';
import rootReducer, { IRootState } from '../reducers';

export default function configureStore(initialState?: IRootState): Store<IRootState> {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(logger, thunk)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<IRootState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

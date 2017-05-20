import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createDebounce from 'redux-debounced';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

function configureStoreProd(initialState) {
  const middlewares = [
    createDebounce(),
    thunk,
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}

function configureStoreDev(initialState) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    createDebounce(),
    thunk,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;

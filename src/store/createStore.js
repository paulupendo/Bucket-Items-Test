import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import { initialState as buckets } from './modules/buckets';

export default () => {
  // =========================
  // Middleware Configuration
  // =========================
  const middlewares = [thunk];

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line
    const { logger } = require('redux-logger');

    middlewares.push(logger);
  }

  // =====================================================================
  // Store Instantiation
  // The store is our immutable source of data. We pull theme information
  // from JSON objects retrieved from the server.
  //
  // Redux with thunks is used to support asynchronous data fetching.
  // https://github.com/gaearon/redux-thunk
  // =====================================================================
  const store = createStore(
    rootReducer,
    { buckets },
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
};

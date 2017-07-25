import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { client } from './apollo';

export default createStore(
  combineReducers({
    // todos: todoReducer,
    // users: userReducer,
    apollo: client.reducer(),
  }),
  {}, // initial state
  compose(
    applyMiddleware(client.middleware()),
    // If you are using the devToolsExtension, you can add it here also
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

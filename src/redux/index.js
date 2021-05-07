import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// setup redux store and apply redux saga. also add redux dev tool
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
    : applyMiddleware(thunk)
);

export default store;

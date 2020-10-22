import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import resultsReducer from '../reducers/results';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    results: resultsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
export default store;

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import resultsReducer from '../reducers/results';
import authReducer from '../reducers/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    results: resultsReducer,
    auth: authReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
export default store;

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import albumsReducer from '../reducers/albumsReducer';
import initialReducer from '../reducers/initialReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    auth: authReducer,
    results: initialReducer,
    albums: albumsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
export default store;

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/authReducer';
import albumsReducer from '../reducers/albumsReducer';
import artistsReducer from '../reducers/artistsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    auth: authReducer,
    albums: albumsReducer,
    artists: artistsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
export default store;

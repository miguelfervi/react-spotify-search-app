import { FETCH_ALBUMS } from '../actions/types';

const albumsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALBUMS:
      return { ...state, albums: action.payload };

    default:
      return state;
  }
};

export default albumsReducer;

import { FETCH_ARTISTS } from '../actions/types';

const artistsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTISTS:
      return { ...state, artists: action.payload };

    default:
      return state;
  }
};

export default artistsReducer;

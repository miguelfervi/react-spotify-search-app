import { FETCH_TRACKS } from '../actions/types';

const tracksReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRACKS:
      return { ...state, tracks: action.payload };

    default:
      return state;
  }
};

export default tracksReducer;

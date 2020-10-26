import { FETCH_ARTISTS, ADD_ARTISTS } from '../actions/types';

const INITIAL_STATE = {
  artists: {},
};

export default (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case FETCH_ARTISTS:
      return { ...state, artists: action.payload };
    case ADD_ARTISTS:
      const artists = { ...state };
      artists.items = [...state.artists.items, ...action.payload.items];
      artists.next = action.payload.next;
      return {
        ...state,
        artists: { ...artists },
      };
    default:
      return state;
  }
};

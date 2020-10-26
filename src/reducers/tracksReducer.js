import { FETCH_TRACKS, ADD_TRACKS } from '../actions/types';

const INITIAL_STATE = {
  tracks: {},
};

export default (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case FETCH_TRACKS:
      return { ...state, tracks: action.payload };
    case ADD_TRACKS:
      const tracks = { ...state };
      tracks.items = [...state.tracks.items, ...action.payload.items];
      tracks.next = action.payload.next;
      return {
        ...state,
        tracks: { ...tracks },
      };
    default:
      return state;
  }
};

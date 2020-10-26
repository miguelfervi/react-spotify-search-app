import { FETCH_TRACKS, ADD_TRACKS } from '../actions/types';

const INITIAL_STATE = {
  tracks: {},
};

export default (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case FETCH_TRACKS:
      return { ...state, tracks: action.payload };
    case ADD_TRACKS:
      let tracks = { ...state };
      let items = {};
      items = [...state.tracks.items, ...action.payload.items];
      tracks.items = items;
      tracks.next = action.payload.next;
      return {
        ...state,
        tracks: { ...tracks },
      };
    default:
      return state;
  }
};

import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_ALBUMS,
  FETCH_ARTISTS,
  FETCH_TRACKS,
  ADD_ALBUMS,
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  albums: {},
  tracks: {},
  artists: {},
};

export default (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true };
    case SIGN_OUT:
      return { ...state, isSignedIn: false };
    case FETCH_ALBUMS:
      return { ...state, albums: action.payload };
    case ADD_ALBUMS:
      let albums = { ...state };
      let items = {};
      items = [...state.albums.items, ...action.payload.items];
      albums.items = items;
      albums.next = action.payload.next;
      return {
        albums: { ...albums },
      };
    case FETCH_ARTISTS:
      return { ...state, artists: action.payload };
    case FETCH_TRACKS:
      return { ...state, tracks: action.payload };
    default:
      return state;
  }
};

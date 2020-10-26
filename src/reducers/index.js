import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_ALBUMS,
  FETCH_ARTISTS,
  FETCH_TRACKS,
  ADD_ALBUMS,
  ADD_ARTISTS,
  ADD_TRACKS,
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
        ...state,
        albums: { ...albums },
      };
    case FETCH_ARTISTS:
      return { ...state, artists: action.payload };
    case ADD_ARTISTS:
      let artists = { ...state };
      let items1 = {};
      items1 = [...state.artists.items, ...action.payload.items];
      artists.items = items1;
      artists.next = action.payload.next;
      return {
        ...state,
        artists: { ...artists },
      };
    case FETCH_TRACKS:
      return { ...state, tracks: action.payload };
    case ADD_TRACKS:
      let tracks = { ...state };
      let items2 = {};
      items2 = [...state.tracks.items, ...action.payload.items];
      tracks.items = items2;
      tracks.next = action.payload.next;
      return {
        ...state,
        tracks: { ...tracks },
      };
    default:
      return state;
  }
};

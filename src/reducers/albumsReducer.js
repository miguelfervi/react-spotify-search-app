import { FETCH_ALBUMS, ADD_ALBUMS } from '../actions/types';

const INITIAL_STATE = {
  albums: {},
};

export default (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

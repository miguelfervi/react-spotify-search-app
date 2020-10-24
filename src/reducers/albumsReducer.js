import { SET_ALBUMS, ADD_ALBUMS } from '../actions/types';

const albumsReducer = (state = {}, action) => {
  const { albums } = action;
  switch (action.type) {
    case SET_ALBUMS:
      return { ...state, albums: action.payload };
    case ADD_ALBUMS:
      return {
        ...state,
        next: albums.next,
        items: [...state.items, ...albums.items],
      };
    default:
      return state;
  }
};

export default albumsReducer;
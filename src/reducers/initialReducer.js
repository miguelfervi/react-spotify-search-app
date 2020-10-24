import { INITIATE_GET_RESULT } from '../actions/types';

const albumsReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIATE_GET_RESULT:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default albumsReducer;

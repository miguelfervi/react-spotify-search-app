import { SIGN_IN } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: false,
};

export default (state = { INITIAL_STATE }, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: action.payload };
    default:
      return state;
  }
};

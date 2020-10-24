import { FETCH_DATA } from '../actions/types';

const resultReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

export default resultReducer;

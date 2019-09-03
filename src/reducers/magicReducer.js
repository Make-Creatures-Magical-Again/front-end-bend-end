import { FETCH_LIST } from '../actions/magicActions';

const initialState = {
  creatures: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_LIST:
      return { ...state, rates: action.payload };
    default:
      return state;
  }
}

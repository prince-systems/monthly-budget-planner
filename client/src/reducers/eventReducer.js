import * as types from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case types.INSERT_EVENT:
      return state;
    default:
      return state;
  }
};

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userName: '',
  token: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return state;
    default:
      return state;
  }
};

export default reducer;

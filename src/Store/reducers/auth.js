import * as actionTypes from '../actions/actionTypes';

const initialState = {
  userName: '',
  token: null,
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        token: action.token
      };
    case actionTypes.SIGNUP_USER:
      return {
        ...state
      };
    case actionTypes.USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    case actionTypes.USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default reducer;

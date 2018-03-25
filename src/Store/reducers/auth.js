import * as actionTypes from '../actions/actionTypes';

const initialState = {
  token: null,
  isLoggedIn: false,
  userCreated: false
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
        ...state,
        userCreated: true
      };
    case actionTypes.SIGNUP_RESET:
      return {
        ...state,
        userCreated: false
      };
    case actionTypes.USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
      case actionTypes.USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false,
        token: null
      };
    default:
      return state;
  }
};

export default reducer;

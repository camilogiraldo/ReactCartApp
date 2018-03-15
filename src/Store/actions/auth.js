import * as actionTypes from './actionTypes';
import axios from '../../axiosInstance';

export const loginUser = token => {
  return {
    type: actionTypes.LOGIN_USER,
    token: token
  };
};

export const loginReq = (email, password) => {
  return dispatch => {
    const authData = {
      email: email,
      password: password
    };

    axios
      .post('api/authenticate', authData, httpHeaders)
      .then(response => {
        dispatch(loginUser(response.data.token));
        localStorage.setItem('token', response.data.token);
        dispatch(userLoggedIn());
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const userLoggedIn = () => {
  return {
    type: actionTypes.USER_LOGGED_IN
  };
};

const userLoggedOut = () => {
  return {
    type: actionTypes.USER_LOGGED_OUT
  };
};

export const userLoggedOutProcess = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch(userLoggedOut());
  };
};

export const signupUser = () => {
  return {
    type: actionTypes.SIGNUP_USER
  };
};

export const signupUserReq = signupData => {
  return dispatch => {
    console.log(signupData);
    axios
      .post('api/signup', signupData, httpHeaders)
      .then(response => {
        //TODO
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const authCheck = () => {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(userLoggedOut);
    } else {
      dispatch(loginUser(token));
      dispatch(userLoggedIn());
    }
  };
};

const httpHeaders = {
  'Content-type': 'application/json'
};

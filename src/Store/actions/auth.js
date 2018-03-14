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
    console.log(authData);
    axios
      .post('api/authenticate', authData, httpHeaders)
      .then(response => {
        console.log(response.data.token);
        dispatch(loginUser(response.data.token));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const signupUser = () => {
  return {
    type: actionTypes.SIGNUP_USER
  };
};

export const signupUserReq = signupData => {
  return dispatch => {
    console.log(signupData)
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

const httpHeaders = {
  'Content-type': 'application/json'
};

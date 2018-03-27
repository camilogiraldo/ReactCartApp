import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

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
      .post("api/authenticate", authData, httpHeaders)
      .then(response => {
        dispatch(loginUser(response.data.token));
        localStorage.setItem("token", response.data.token);
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
    localStorage.removeItem("token");
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
    axios
      .post("api/signup", signupData, httpHeaders)
      .then(response => {
        //TODO
        dispatch(signupUser());
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const signupReset = () => {
  return {
    type: actionTypes.SIGNUP_RESET
  };
};

export const authCheck = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(userLoggedOut);
    } else {
      dispatch(loginUser(token));
      dispatch(userLoggedIn());
    }
  };
};

export const verifyUser = token => {
  return {
    type: actionTypes.VERIFY_USER,
    token: token
  };
};

export const verifyUserReq = token => {
  return dispatch => {
    token = token.toString();
    axios
      .get("/api/verify_email?token=" + token)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        dispatch(verifyUser(response.data.token));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
const getCountries = countries => {
  return {
    type: actionTypes.GET_COUNTRIES_FILTER,
    countries: countries
  };
};

export const getCountriesReq = () => {
  return dispatch => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        dispatch(getCountries(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const httpHeaders = {
  "Content-type": "application/json"
};

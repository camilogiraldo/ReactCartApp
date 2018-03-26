import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

export const addItemToBuy = itemId => {
  return {
    type: actionTypes.ADD_ITEM_TO_BUY,
    itemToBuy: itemId
  };
};

export const addItemToCartReq = item => {
  return dispatch => {
    const headers = getHeaders();
    console.log(headers);
    axios
      .post("/api/addcart/" + item, null, { headers: headers })
      .then(response => {
        dispatch(getItemsInCartReq(true));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
const addItemToCart = cart => {
  return {
    type: actionTypes.ADD_ITEM_TO_CART,
    cart: cart
  };
};
const getItemsInCart = cart => {
  return {
    type: actionTypes.GET_ITEMS_IN_CART,
    cart: cart
  };
};

export const getItemsInCartReq = args => {
  return dispatch => {
    const headers = getHeaders();
    axios
      .get("/api/cart", { headers: headers })
      .then(response => {
        if (args) {
          dispatch(addItemToCart(response.data));
        } else {
          console.log(response.data);
          dispatch(getItemsInCart(response.data));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};
const removeItemFromCart = id => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    item: id
  };
};

export const removeFromCartReq = id => {
  return dispatch => {
    axios
      .post("/api/deletecart/" +id, null,  { headers: getHeaders() })
      .then(response => {
        dispatch(removeItemFromCart(id))
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const getHeaders = () => {
  return {
    "Content-type": "application/json",
    Authorization: localStorage.getItem("token")
  };
};

import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

export const addItemToBuy = itemId => {
  return {
    type: actionTypes.ADD_ITEM_TO_BUY,
    itemToBuy: itemId
  };
};

export const addItemToCart = item => {
  return {
    type: actionTypes.ADD_ITEM_TO_CART,
    item: item
  };
};

const getItemsInCart = (cart) => {
  return {
    type: actionTypes.GET_ITEMS_IN_CART,
    cart: cart
  };
};

export const getItemsInCartReq = () => {
  return dispatch => {
    const headers = getHeaders();
    console.log(headers);
    axios
      .get("/api/cart", { headers: headers })
      .then(response => {
        response.data.forEach(item => {

          dispatch(getItemsInCart(item))
        })
        console.log('respuests',response.data);
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

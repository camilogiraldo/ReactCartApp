import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  itemsInCart: [],
  itemToBuy: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_BUY:
      return {
        ...state,
        itemToBuy: action.itemToBuy
      };
    case actionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        itemsInCart: action.cart
      };
    case actionTypes.REMOVE_ITEM_FROM_CART:
      const newCart = state.itemsInCart.filter(item => item._id !== action.item);
      console.log(newCart)
      return {
        ...state,
        itemsInCart: newCart
      };
    case actionTypes.GET_ITEMS_IN_CART:
      return {
        ...state,
        itemsInCart: action.cart
      };
    default:
      return state;
  }
};

export default reducer;

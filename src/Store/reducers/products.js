import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: null,
  loadedProduct: null,
  productUploaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case actionTypes.PRODUCT_UPLOADED:
      return {
        ...state,
        productUploaded: true
      };
    case actionTypes.REMOVE_REDIRECT:
      return {
        ...state,
        productUploaded: false
      };
    case actionTypes.GET_PRODUCT_BY_ID:
      return {
        ...state,
        loadedProduct: action.loadedProduct
      };
    default:
      return state;
  }
};

export default reducer;

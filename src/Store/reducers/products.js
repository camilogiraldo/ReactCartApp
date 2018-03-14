import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: action.products
      };

    default:
      return state;
  }
};

export default reducer;

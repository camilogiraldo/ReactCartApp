import * as actionTypes from './actionTypes';
import axios from '../../axiosInstance';

export const getProducts = (products) => {
  return {
    type: actionTypes.GET_PRODUCTS,
    products: products
  };
};


export const getProductsReq = () => {
    return dispatch => {
        axios.get('/products').then(response => {
            dispatch(getProducts(response.data))
            console.log(response)
        })
    }
}

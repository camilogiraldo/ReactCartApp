import * as actionTypes from "./actionTypes";
import axios from "../../axiosInstance";

export const getProducts = products => {
  return {
    type: actionTypes.GET_PRODUCTS,
    products: products
  };
};

export const getProductsReq = () => {
  return dispatch => {
    axios
      .get("/products")
      .then(response => {
        dispatch(getProducts(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getProductById = product => {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID,
    loadedProduct: product
  };
};

export const getProductByIdReq = productId => {
  return dispatch => {
    axios
      .get("products/" + productId)
      .then(response => {
        dispatch(getProductById(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};

const uploadProduct = () => {
  return {
    type: actionTypes.PRODUCT_UPLOADED
  };
};

export const uploadProductReq = product => {
  return dispatch => {
    const headers = getHeaders();
    axios
      .post("/products/create", product, { headers: headers })
      .then(response => {
        console.log(response);
        dispatch(uploadProduct());
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const removeCreateProductRedirect = () => {
  return {
    type: actionTypes.REMOVE_REDIRECT
  }
}
const getHeaders = () => {
  return {
    "Content-type": "application/json",
    Authorization: localStorage.getItem("token")
  };
};

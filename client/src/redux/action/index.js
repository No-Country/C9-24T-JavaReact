import axios from "axios";

// const urlAPI = process.env.REACT_APP_API;

export function getCategory() {
  return async function (dispatch) {
    try {
      const category = await axios.get(`http://3.88.177.40:8080/categoria`);
      // console.log(category.data);
      dispatch({
        type: "GET_CATEGORY",
        payload: category.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCategoryProducts(id) {
  console.log(id, "ACTION");
  return async function (dispatch) {
    try {
      console.log(id, "ACTION try");
      const product = await axios.get(
        `http://3.88.177.40:8080/categoria/${id}/productos`
      );
      // console.log(category.data);
      dispatch({
        type: "GET_CATEGORY_PRODUCTS",
        payload: product.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductDescription(id) {
  // console.log(id, "ACTION");
  return async function (dispatch) {
    try {
      // console.log(id, "ACTION try");
      const productDescription = await axios.get(
        `http://3.88.177.40:8080/producto/${id}`
      );
      // console.log(category.data);
      dispatch({
        type: "GET_PRODUCT_DESCRIPTION",
        payload: productDescription.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProduct() {
  return async function (dispatch) {
    try {
      const product = await axios.get(
        `http://3.88.177.40:8080/producto?page=0&size=18`
      );
      // console.log(category.data);
      dispatch({
        type: "GET_PRODUCT",
        payload: product.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

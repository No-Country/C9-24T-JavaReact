import axios from "axios";

import { getSaldo } from "../../services/saldo";
// ACTION CREATORS : son funciones que devuelven una acción!

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
  return async function (dispatch) {
    try {
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

export function togleSearch(search) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "@navbar/togleSearch",
        payload: search,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function agregarProductoCarrito({ idProduct, counter, precio }) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "@carrito/agregarProducto",
        payload: { idProduct, counter, precio },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateProductoCarrito(id, data) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "@carrito/actualizarCounterProducto",
        payload: { id, data },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function conterModify({ idProduct, counter }) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "@carrito/counterModify",
        payload: { idProduct, counter },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getSaldoUser() {
  return async function (dispatch) {
    getSaldo(true)
      .then((saldo) => {
        console.log(saldo.monto);
        dispatch({
          type: "GET_SALDO",
          payload: saldo.monto,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function updateSaldoUser(newSaldo) {
  return async function (dispatch) {
    dispatch({
      type: "@saldo/update",
      payload: newSaldo,
    });
  };
}

export function removeProduct(idProduct) {
  return async function (dispatch) {
    try {
      dispatch({
        type: "@carrito/eliminarProducto",
        payload: { idProduct },
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function vaciarCarrito() {
  return async function (dispatch) {
    try {
      dispatch({
        type: "@carrito/vaciarCarrito",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

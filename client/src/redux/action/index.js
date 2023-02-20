import axios from "axios";

// const urlAPI = process.env.API_REACT_APP;

export function getCategory() {
  /* return async function (dispatch) {
    const response = await fetch("http://3.88.177.40:8080/categoria");

    if (response.ok) {
      const json = await response.json();

      dispatch({ type: "GET_SELLER", payload: json });
    } else {
      dispatch({
        type: "REQUEST_ERROR",
        payload: "La búsqueda no arrojó resultados",
      });
    }
  }; */
  return async function (dispatch) {
    try {
      const category = await axios.get("http://3.88.177.40:8080/categoria");
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

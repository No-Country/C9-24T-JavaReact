import axios from "axios";

// const urlAPI = process.env.API_REACT_APP;

export function getCategory() {
  return async function (dispatch) {
    try {
      const category = await axios.get("http://3.88.177.40:8080/categoria");
      console.log(category);
      dispatch({
        type: "GET_CATEGORY",
        payload: category.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

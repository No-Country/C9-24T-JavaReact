import axios from "axios";
import BDproducts from "../../assets/BD.json";

const urlAPI = "BDproducts";

export function getProduct() {
  return async function (dispatch) {
    try {
      const product = await axios.get(`${urlAPI}/product`);
      dispatch({
        type: "GET_PRODUCT",
        payload: product.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

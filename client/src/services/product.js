import axios from "axios";

export const getProduct = async (id) => {
  console.log(id, "axios");
  const baseUrl = `http://3.88.177.40:8080/producto/${id}`;
  const res = await axios.get(baseUrl);
  return res.data;
};

export const getProductSearch = async (searchValue) => {
  console.log(searchValue, "axios");
  const baseUrl = `http://3.88.177.40:8080/producto?page=0&search=${searchValue}&size=10
  `;
  const res = await axios.get(baseUrl);
  return res.data;
};

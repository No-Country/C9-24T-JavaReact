import axios from "axios";

export const authLogin = async (login) => {
  console.log(login, "axios");

  const baseUrl = `http://3.88.177.40:8080/authenticate/login`;
  const res = await axios.post(baseUrl, login);
  return res.data;
};

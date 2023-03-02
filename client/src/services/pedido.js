import instance from "./configAxios";

export const postPedido = async (productos) => {
  console.log(productos, "pedido");

  const res = await instance.post("/pedido", productos);
  return res.data;
};

// export const getSaldo = async () => {
//   const res = await instance.get("/usuario/estudiante");
//   return res.data;
// };

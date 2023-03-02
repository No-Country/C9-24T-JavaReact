import instance from "./configAxios";

export const postPedido = async (productos) => {
  console.log(productos, "pedido");
  for (const producto of productos.productos) {
    producto["cantidad"] = producto.counter;
    producto["idProducto"] = producto.idProduct;
  }

  const res = await instance.post("/pedido", productos);
  return res.data;
};

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProductoCarrito, removeProduct } from "../redux/action";

import { getProduct } from "../services/product";

export function useCounterProduct(id) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const itemCarrito = useSelector((state) =>
    state.itemsCarrito.find((element) => element.idProduct === id)
  );
  const [producto, setProducto] = useState({});
  const [counter, setCounter] = useState(itemCarrito.counter);

  useEffect(() => {
    getProduct(id)
      .then((product) => {
        setProducto(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    dispatch(updateProductoCarrito(id, { counter }));
  }, [counter]);

  console.log("****************");
  console.log(state);
  console.log(state.itemsCarrito);
  console.log(itemCarrito);

  const incrementarCounter = () => {
    if (counter < producto.stock) {
      setCounter(itemCarrito.counter + 1);
    } else {
      setCounter(producto.stock);
    }
  };

  const disminuirCounter = () => {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter(itemCarrito.counter - 1);
    }
  };

  const eliminarProd = (idProducto) => {
    dispatch(removeProduct(idProducto));
    console.log(itemCarrito, state, "MUESTRA");
  };

  return {
    counter,
    producto,
    incrementarCounter,
    disminuirCounter,
    eliminarProd,
  };
}

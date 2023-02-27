import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProductoCarrito } from "../redux/action";

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

  // console.log(producto);
  // console.log(itemCarrito);

  const incrementarCounter = () => {
    setCounter(counter + 1);
    dispatch(updateProductoCarrito(id, { counter }));
    console.log(state.itemsCarrito);
  };

  const disminuirCounter = () => {
    setCounter(counter - 1);
  };

  return { counter, producto, incrementarCounter, disminuirCounter };
}

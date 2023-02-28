import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import CartSelectCard from "../../Common/CartSelectCard";
import { Pago } from "../../pago";
import { Container } from "@mui/material/";

import { Main, NavBar, TopBar } from "../../Layout";

export default function CartView() {
  const state = useSelector((state) => state);

  //  hacer una funcion para calcular el total precio de los productos.

  console.log(state.itemsCarrito, "cart");
  return (
    <>
      <TopBar isCart={true} />
      <Main sx={{ paddingBottom: "7em" }}>
        <Container sx={{ margin: 0, padding: "0.1em 0 0 0" }}>
          {state.itemsCarrito.map((dato) => (
            <CartSelectCard
              key={dato.idProduct}
              idProducto={dato.idProduct}
              // img={dato.product.imagenes[0].url}
              // nombre={dato.product.nombre}
              // precio={dato.product.precio}
            />
          ))}
        </Container>
      </Main>
      <Pago />

      {/* <NavBar /> */}
    </>
  );
}

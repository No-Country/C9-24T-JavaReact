import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import CartSelectCard from "../../Common/CartSelectCard";
import TopBar from "../../Layout/TopBar";
import { styled } from "@mui/material/styles";

import { Container, Typography, Stack } from "@mui/material/";
import NavBar from "../../Layout/NavBar";

const DivCarrito = styled(Stack)`
  background: black;
  color: white;
  border-radius: 15px;
  width: 10em;
  height: 2.5em;
  padding: 0 0.7em;
`;

export default function CartView() {
  const state = useSelector((state) => state);

  //  hacer una funcion para calcular el total precio de los productos.

  console.log(state.itemsCarrito, "cart");
  return (
    <>
      <TopBar isCart={true} />

      <Container sx={{ margin: 0, padding: 0 }}>
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
      <Stack direction="row">
        <Typography
          variant="caption"
          sx={{
            // display: "inline",
            textAlign: "left",
            padding: "0.5em 0 0 0.5em",
            paddingLeft: "2em",
            fontWeight: "bold",
            fontSize: "1.1em",
          }}
        >
          Total:
        </Typography>
        <Typography
          variant="caption"
          sx={{
            // display: "inline",
            textAlign: "right",
            padding: "0.5em 0 0 0.5em",
            margin: "0 2em 0 auto",
            fontWeight: "bold",
            fontSize: "1.1em",
          }}
        >
          $$$$$$
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ padding: "2em 0 5em 0", height: "40px" }}
      >
        <DivCarrito direction="row" justifyContent="center" alignItems="center">
          <Typography variant="p" component="p" sx={{}}>
            Finalizar compra
          </Typography>
        </DivCarrito>
      </Stack>
      <NavBar />
    </>
  );
}

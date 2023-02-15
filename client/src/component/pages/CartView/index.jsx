import * as React from "react";
import CartSelectCard from "../../Common/CartSelectCard";
import SearchBar from "../../Layout/SearchBar";
import { styled } from "@mui/material/styles";

import { Container, Typography, Stack } from "@mui/material/";

const DivCarrito = styled(Stack)`
  background: black;
  color: white;
  border-radius: 15px;
  width: 10em;
  height: 2.5em;
  padding: 0 0.7em;
`;

export default function ProductView() {
  return (
    <>
      <SearchBar />

      <Container sx={{ margin: 0, padding: 0 }}>
        <CartSelectCard />
        <CartSelectCard />
        <CartSelectCard />
        <CartSelectCard />
      </Container>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ padding: "1em", height: "40px" }}
      >
        <DivCarrito direction="row" justifyContent="center" alignItems="center">
          <Typography variant="p" component="p" sx={{}}>
            Finalizar compra
          </Typography>
        </DivCarrito>
      </Stack>
    </>
  );
}

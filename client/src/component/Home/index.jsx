import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from "../Common/CardProduct";
import NavBar from "../Layout/NavBar";
import TopBar from "../Layout/TopBar";
import FilterProduct from "../FilterProduct";
import { Container, Grid, Typography } from "@mui/material/";
import { getProduct } from "../../redux/action";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log(state);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <>
      <TopBar />
      <Typography
        variant="h6"
        sx={{ textAlign: "center", padding: "1em 0 1em 0.5em" }}
      >
        ¡Te damos la bienvenida!
      </Typography>
      <Container>
        <Grid container spacing={2} sx={{ width: 340 }}>
          {state?.product &&
            state.product.map((dato) => (
              <Grid key={dato.id} item xs={6} md={8}>
                <CardProduct
                  title={dato.nombre}
                  precio={dato.precio}
                  img={dato.imagenes[0].url}
                />
              </Grid>
            ))}
          {/* <Grid item xs={6} md={4}>
            <CardProduct />
          </Grid>
          <Grid item xs={6} md={4}>
            <CardProduct />
          </Grid>
          <Grid item xs={6} md={8}>
            <CardProduct />
          </Grid>
          <Grid item xs={6} md={4}>
            <CardProduct />
          </Grid>
          <Grid item xs={6} md={4}>
            <CardProduct />
          </Grid> */}
        </Grid>
      </Container>
      <NavBar />
    </>
  );
}

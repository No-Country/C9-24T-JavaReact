import * as React from "react";
import CardProduct from "../Common/CardProduct";
import NavBar from "../Layout/NavBar";
import TopBar from "../Layout/TopBar";
import FilterProduct from "../FilterProduct";
import { Container, Grid, Typography } from "@mui/material/";

export default function Home() {
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
          <Grid item xs={6} md={8}>
            <CardProduct />
          </Grid>
          <Grid item xs={6} md={4}>
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
          </Grid>
        </Grid>
      </Container>
      <NavBar />
    </>
  );
}

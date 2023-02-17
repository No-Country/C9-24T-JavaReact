import * as React from "react";
import CardProduct from "../../Common/CardProduct";
import NavBar from "../../Layout/NavBar";
import SearchBar from "../../Layout/SearchBar";
import FilterProduct from "../../FilterProduct";
import { Container, Grid } from "@mui/material/";

export default function ProductView() {
  return (
    <>
      <SearchBar isCategory={true} />
      <FilterProduct sx={{ marginTop: "200px" }} />
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

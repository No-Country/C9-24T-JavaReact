import * as React from "react";
import CardProduct from "../../Common/CardProduct";
import NavBar from "../../Layout/NavBar";
import TopBar from "../../Layout/TopBar";
import FilterProduct from "../../FilterProduct";
import { Container, Grid } from "@mui/material/";
import BDproduct from "../../../assets/BD.json";

export default function ProductView() {
  return (
    <>
      <TopBar isCategory={true} />
      <FilterProduct sx={{ marginTop: "200px" }} />
      <Container>
        <Grid container spacing={2} sx={{ width: 340 }}>
          {BDproduct.content.map((dato) => (
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
      <ul>
        <li>sasas</li>
        <li>ddasd</li>
        <li>dasdas</li>
      </ul>
      <NavBar />
    </>
  );
}

// import * as React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";

import CardProduct from "../../Common/CardProduct";
import NavBar from "../../Layout/NavBar";
import TopBar from "../../Layout/TopBar";
import FilterProduct from "../../FilterProduct";
import { Container, Grid } from "@mui/material/";
import BDproduct from "../../../assets/BD.json";

import { useParams } from "react-router-dom";

export default function ProductView() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  // console.log(id);

  useEffect(() => {
    async function getProducts() {
      const url = `http://3.88.177.40:8080/categoria/${id}/productos?page=0&size=10`;
      const response = await axios.get(url);
      setProducts(response.data.content);
      console.log(products);
    }
    getProducts();
  }, [id]);
  console.log(products);

  return (
    <>
      <TopBar isCategory={true} />
      <FilterProduct sx={{ marginTop: "200px" }} />
      <Container>
        <Grid container spacing={2} sx={{ width: 340 }}>
          {products.map((dato) => (
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

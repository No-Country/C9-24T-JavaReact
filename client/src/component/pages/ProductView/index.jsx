// import * as React from "react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from "../../Common/CardProduct";
import NavBar from "../../Layout/NavBar";
import TopBar from "../../Layout/TopBar";
import FilterProduct from "../../FilterProduct";
import { Container, Grid } from "@mui/material/";
import { Link, useParams } from "react-router-dom";
import { getCategoryProducts } from "../../../redux/action";

export default function ProductView() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCategoryProducts(id));
  }, [dispatch, id]);

  return (
    <>
      <TopBar isCategory={true} />
      <FilterProduct sx={{ marginTop: "200px" }} />
      <Container>
        <Grid container spacing={2} sx={{ width: 340 }}>
          {state &&
            state.categoryProducts.map((dato) => (
              <Grid key={dato.id} item xs={6} md={8}>
                <Link to={`/description/${dato.id}`}>
                  <CardProduct
                    title={dato.nombre}
                    precio={dato.precio}
                    img={dato.imagenes[0].url}
                  />
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
      <NavBar />
    </>
  );
}

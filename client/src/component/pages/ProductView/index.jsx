// import * as React from "react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from "../../Common/CardProduct";
// import NavBar from "../../Layout/NavBar";
// import TopBar from "../../Layout/TopBar";
import { Main, NavBar, TopBar } from "../../Layout";

import FilterProduct from "../../FilterProduct";
import { Container, Grid } from "@mui/material/";
import { Link, useParams } from "react-router-dom";
import { getCategoryProducts } from "../../../redux/action";
import { capitalizeFirstLetter } from "../../../helpers";

import { validarImg } from "../../../helpers";

export default function CartView() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCategoryProducts(id));
  }, [dispatch, id]);
  console.log(state);
  return (
    <>
      <TopBar isCategory={true} />
      <Main>
        <FilterProduct sx={{ marginTop: "200px" }} />
        <Container>
          <Grid container spacing={2} sx={{ width: 340 }}>
            {state &&
              state.categoryProducts.map((dato) => (
                <Grid key={dato.id} item xs={6} md={8}>
                  <Link to={`/description/${dato.id}`}>
                    <CardProduct
                      title={capitalizeFirstLetter(dato.nombre)}
                      precio={dato.precio}
                      img={dato.imagenes[0].url}
                    />
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Main>

      <NavBar />
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from "../Common/CardProduct";
import CategoryCard from "../Common/CategoryCard";
import NavBar from "../Layout/NavBar";
import TopBar from "../Layout/TopBar";
import FilterProduct from "../FilterProduct";
import { Container, Grid, Typography } from "@mui/material/";
import { getCategory } from "../../redux/action";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // const carrito = useSelector((state) => state && state.itemsCarrito);

  console.log(state);
  // console.log(carrito && carrito);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);
  return (
    <>
      {/* {bar?<TopBar isBuscar="true" />:<TopBar isBuscar="true" />} */}
      <TopBar />
      <Typography
        variant="h6"
        sx={{ textAlign: "center", padding: "1em 0 1em 0.5em" }}
      >
        ¡Te damos la bienvenida!
      </Typography>
      {/* <Container>
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
        </Grid>
      </Container> */}
      <Box>
        <Typography
          variant="h6"
          sx={{ textAlign: "left", padding: "0.5em 0 0 0.5em" }}
        >
          Categorias
        </Typography>
        <Container sx={{ margin: 0, padding: "0.5em", marginBottom: "10em" }}>
          <Grid
            container
            spacing={0.5}
            sx={{ width: 340, margin: 0, padding: 0 }}
          >
            {state &&
              state.category.map((dato) => (
                <Grid
                  key={dato.id}
                  sx={{
                    borderRadius: "15px",
                    margin: 0,
                    marginBottom: "0.5em",
                    padding: 0,
                    boxShadow: "none",
                    width: "160px",
                    height: "120px",
                  }}
                  item
                  xs={6}
                  md={8}
                >
                  <Link to={`/products/${dato.id}`}>
                    <CategoryCard
                      isCategory
                      title={dato.nombre}
                      img={dato.imagen}
                    />
                  </Link>
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>

      <NavBar />
    </>
  );
}

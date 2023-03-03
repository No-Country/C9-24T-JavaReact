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

import { getProductSearch } from "../../../services/product";

export default function CartView() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const searchValue = useSelector((state) => state && state.searchValue);
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("categorias");

  const { id } = useParams();

  // const getNameCategory = (id, categories) => {
  //   categories.forEach((element) => {
  //     if (element.id === id) {
  //       return element.nombre;
  //     }
  //     return "categorias";
  //   });
  // };
  // useEffect(() => {
  //   setTitle(getNameCategory(id, state.category));
  //   console.log(title, "mi title");
  // }, []);

  useEffect(() => {
    // console.log(state.categoryProducts, "p*c");
    dispatch(getCategoryProducts(id));

    // console.log(state && state.categoryProducts, "p*c2");
  }, [dispatch, id]);

  useEffect(() => {
    if (!(searchValue.length > 1)) {
      console.log("productos normal");
    } else {
      getProductSearch(searchValue)
        .then((productos) => {
          console.log(productos.content);
          setProducts(productos.content);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    console.log(products);

    console.log(state);
    console.log(searchValue, "categoryView");
  }, [searchValue]);

  console.log(state);

  // !searchedTodos.length
  return (
    <>
      <TopBar isCategory={true} />
      <Main>
        <FilterProduct sx={{ marginTop: "200px" }} />
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              maxWidth: {
                xs: 600,
                sm: 900,
                md: 1200,
                lg: 1536,
              },
            }}
          >
            {!products.length
              ? state &&
                state.categoryProducts.map((dato) => (
                  <Grid key={dato.id} item xs={6} sm={4} md={3}>
                    <Link to={`/description/${dato.id}`}>
                      <CardProduct
                        title={capitalizeFirstLetter(dato.nombre)}
                        precio={dato.precio}
                        img={dato.imagenes[0].url}
                      />
                    </Link>
                  </Grid>
                ))
              : products.map((dato) => (
                  <Grid key={dato.id} item xs={6} sm={4} md={3}>
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

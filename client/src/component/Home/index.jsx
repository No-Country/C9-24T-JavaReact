import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardProduct from "../Common/CardProduct";
import CategoryCard from "../Common/CategoryCard";
// import NavBar from "../Layout/NavBar";
import { Main, NavBar, TopBar } from "../Layout";

// import TopBar from "../Layout/TopBar";
import FilterProduct from "../FilterProduct";
import { Container, Grid, Typography } from "@mui/material/";
import { getCategory, getSaldoUser } from "../../redux/action";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter, convertCurrency } from "../../helpers";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const saldo = useSelector((state) => state && state.saldo);

  // const carrito = useSelector((state) => state && state.itemsCarrito);

  console.log(state);

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSaldoUser());
  }, [dispatch]);

  console.log(typeof saldo);

  return (
    <>
      {/* {bar?<TopBar isBuscar="true" />:<TopBar isBuscar="true" />} */}
      <TopBar />

      <Main sx={{ paddingBottom: "0em" }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            padding: "1em 0 1em 0.5em",
            fontfamily: "Roboto",
            fontstyle: "normal",
            lineheight: "24px",
            fontSize: "1.25rem",
            fontWeight: "500",
          }}
        >
          ¡Te damos la bienvenida!
        </Typography>
        <Box
          sx={{
            backgroundColor: "#00838F",
            boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "15px",
            margin: "0.5em",
            height: "4.5em",
            padding: "1em 0 0.3em 1em",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontfamily: "Roboto",
              fontstyle: "normal",
              lineheight: "1.5rem",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Tu saldo disponible es
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontfamily: "Roboto",
              fontstyle: "normal",
              lineheight: "1.5rem",
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            {convertCurrency({ currency: "USD", value: saldo })}
            {console.log(convertCurrency({ currency: "ARS", saldo }))}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              textAlign: "left",
              padding: "0.5em 0 0 0.5em",
              fontFamily: "roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1rem",
              lineHeight: "1.5rem",
            }}
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
                        title={capitalizeFirstLetter(dato.nombre)}
                        img={dato.imagen}
                      />
                    </Link>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </Box>
      </Main>

      <NavBar />
    </>
  );
}

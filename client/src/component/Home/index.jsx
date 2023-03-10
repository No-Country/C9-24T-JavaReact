import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const saldo = useSelector((state) => state && state.saldo);
  const autentificado = useSelector(
    (state) => state && state.sesion.isAuthenticated
  );
  const token = useSelector((state) => state && state.sesion.jwt);

  useEffect(() => {
    if (autentificado) {
      console.log("autentificado");
      localStorage.setItem("token", token);
    } else {
      navigate("/login");
      console.log("no autentificado");
    }
  }, []);

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
            padding: "24px 0 16px 0.5em",
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
            margin: "0 1em",
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
              fontWeight: "500",
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
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              textAlign: "left",

              padding: "32px 0 8px 16px",
              fontFamily: "roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "1rem",
              lineHeight: "1.5rem",
            }}
          >
            Categorias
          </Typography>
          <Container
            sx={{
              margin: 0,
              padding: "0.5em",
              marginBottom: "4em",
              maxWidth: {
                xs: 600,
                sm: 900,
                md: 1200,
                lg: 1536,
                xl: 5600,
              },
            }}
          >
            <Grid
              container
              spacing={{ xs: 0.5, sm: 1.5, md: 2 }}
              sx={{
                maxWidth: {
                  xs: 600,
                  sm: 900,
                  md: 1200,
                  lg: 1536,
                  xl: 5600,
                },
                margin: 0,
                padding: 0,
              }}
            >
              {state &&
                state.category.map((dato) => (
                  <Grid
                    key={dato.id}
                    sx={{
                      borderRadius: "15px",
                      margin: 0,
                      marginBottom: { xs: "1em", sm: "1.5em", md: "2em" },
                      padding: 0,
                      boxShadow: "none",
                      width: { xs: 160, sm: 192, md: 224, lg: 272 },
                      height: { xs: 120, sm: 144, md: 168, lg: 204 },
                      /* alignItems: "center",
                      justifyContent: "center", */
                    }}
                    item
                    xs={6}
                    sm={4}
                    md={3}
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

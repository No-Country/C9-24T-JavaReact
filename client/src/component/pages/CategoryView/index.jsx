import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoryCard from "../../Common/CategoryCard";
import TopBar from "../../Layout/TopBar";
import NavBar from "../../Layout/NavBar";
import FilterProduct from "../../FilterProduct";
import { Container, Grid, Stack, Box, Typography } from "@mui/material/";
import BDcategory from "../../../assets/BDcategory.json";
import { getCategory } from "../../../redux/action";

import { Link } from "react-router-dom";

export default function CategoryView() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <Stack sx={{ margin: 0, pading: 0, height: "100vh" }}>
      <TopBar isSearch={true} />
      <Box>
        <Typography
          variant="h6"
          sx={{ textAlign: "left", padding: "0.5em 0 0 0.5em" }}
        >
          Categorias
        </Typography>
        <Container sx={{ margin: 0, padding: "0.5em" }}>
          <Grid
            container
            spacing={0.5}
            sx={{ width: 340, margin: 0, padding: 0 }}
          >
            {category.map((dato) => (
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
                <Link to={`/product`}>
                  <CategoryCard
                    isCategory
                    title={dato.nombre}
                    img={dato.imagen}
                  />
                </Link>
              </Grid>
            ))}
            {/* <Grid
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
              <Link to="/product">
                 {BDproducts.maps((dato) => (
                  <CategoryCard isCategory title={dato.content.nombre} />
                ))}
                <CategoryCard isCategory />
              </Link>
            </Grid> */}
            {/* <Grid
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
              <CategoryCard />
            </Grid>
            <Grid
              sx={{
                borderRadius: "15px",
                margin: 0,
                marginBottom: "0.5em",
                pading: 0,
                boxShadow: "none",
                width: "160px",
                height: "120px",
              }}
              item
              xs={6}
              md={8}
            >
              <CategoryCard />
            </Grid>
            <Grid
              sx={{
                borderRadius: "15px",
                margin: 0,
                marginBottom: "0.5em",
                pading: 0,
                boxShadow: "none",
                width: "160px",
                height: "120px",
              }}
              item
              xs={6}
              md={8}
            >
              <CategoryCard />
            </Grid>
            <Grid
              sx={{
                borderRadius: "15px",
                margin: 0,
                marginBottom: "0.5em",
                pading: 0,
                boxShadow: "none",
                width: "160px",
                height: "120px",
              }}
              item
              xs={6}
              md={8}
            >
              <CategoryCard />
            </Grid>
            <Grid
              sx={{
                borderRadius: "15px",
                margin: 0,
                marginBottom: "0.5em",
                pading: 0,
                boxShadow: "none",
                width: "160px",
                height: "120px",
              }}
              item
              xs={6}
              md={8}
            >
              <CategoryCard />
            </Grid>
            <Grid
              sx={{
                borderRadius: "15px",
                margin: 0,
                marginBottom: "0.5em",
                pading: 0,
                boxShadow: "none",
                width: "160px",
                height: "120px",
              }}
              item
              xs={6}
              md={8}
            >
              <CategoryCard />
            </Grid>
            <Grid
              sx={{
                borderRadius: "15px",
                margin: 0,
                marginBottom: "0.5em",
                pading: 0,
                boxShadow: "none",
                width: "160px",
                height: "120px",
              }}
              item
              xs={6}
              md={8}
            >
              <CategoryCard />
            </Grid>
            <Grid
              sx={{
                borderRadius: "15px",
                margin: 0,
                marginBottom: "0.5em",
                pading: 0,
                boxShadow: "none",
                width: "160px",
                height: "120px",
              }}
              item
              xs={6}
              md={8}
            >
              <CategoryCard />
            </Grid>
            <Grid
              sx={{
                borderRadius: "15px",
                margin: 0,
                marginBottom: "0.5em",
                pading: 0,
                boxShadow: "none",
                width: "160px",
                height: "120px",
              }}
              item
              xs={6}
              md={8}
            >
              <CategoryCard />
            </Grid> */}
          </Grid>
        </Container>
      </Box>

      <NavBar sx={{ alignSelf: "flex-end" }} />
    </Stack>
  );
}

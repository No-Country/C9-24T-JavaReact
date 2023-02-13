import * as React from "react";
import CategoryCard from "../../Common/CategoryCard";
import MySearchBar from "../../Common/MySearchBar";
import NavBar from "../../Layout/NavBar";
import FilterProduct from "../../FilterProduct";
import { Container, Grid } from "@mui/material/";

export default function CategoryView() {
  return (
    <>
      <MySearchBar />
      <Container>
        <Grid container spacing={2} sx={{ width: 340 }}>
          <Grid item xs={6} md={8}>
            <CategoryCard />
          </Grid>
          <Grid item xs={6} md={8}>
            <CategoryCard />
          </Grid>
          <Grid item xs={6} md={8}>
            <CategoryCard />
          </Grid>
          <Grid item xs={6} md={8}>
            <CategoryCard />
          </Grid>
        </Grid>
      </Container>
      <NavBar />
    </>
  );
}

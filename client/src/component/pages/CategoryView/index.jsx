import * as React from "react";
import CategoryCard from "../../Common/CategoryCard";
import MySearchBar from "../../Common/MySearchBar";
import NavBar from "../../Layout/NavBar";
import FilterProduct from "../../FilterProduct";
import { Container, Grid } from "@mui/material/";
import { blue } from "@mui/material/colors";

export default function CategoryView() {
  return (
    <>
      <MySearchBar />
      <Container sx={{ margin: 0, padding: 0 }}>
        <Grid container spacing={2} sx={{ width: 340, margin: 0, padding: 0 }}>
          {/* <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard /> */}
          <Grid
            sx={{
              borderRadius: "15px",
              background: "blue",
              margin: 0,
              pading: 0,
            }}
            /* item
            xs={6}
            md={8} */
          >
            <CategoryCard />
          </Grid>
          <Grid
            sx={{
              borderRadius: "15px",
              background: "blue",
              margin: 0,
              padding: 0,
              width: "160px",
              height: "140px",
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
              background: "blue",
              margin: 0,
              pading: 0,
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
              background: "blue",
              margin: 0,
              pading: 0,
            }}
            item
            xs={6}
            md={8}
          >
            <CategoryCard />
          </Grid>
        </Grid>
      </Container>
      <NavBar />
    </>
  );
}

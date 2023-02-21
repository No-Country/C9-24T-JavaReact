import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Box,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import { Link, useParams } from "react-router-dom";
import { getProductDescription } from "../../../redux/action";

const MyCard = styled(Card)`
  width: 360px;
  height: 80vh;
`;

const ViewProduct = styled(Container)`
  height: 100vh;
  padding: 0;
`;

// const DivProduct = styled(Box)`
// background:black;
// color:white;
// border-radius:15px;
// with:10em;
// height:2.5em;
// padding:0 0.5em
// `;

const DivCarrito = styled(Stack)`
  background: black;
  color: white;
  border-radius: 15px;
  width: 8em;
  height: 2.5em;
  padding: 0 0.7em;
`;

export default function RecipeReviewCard() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDescription(id));
  }, [id]);

  return (
    <ViewProduct>
      <MyCard>
        <CardHeader
          sx={{ position: "absolute", zIndex: 2, width: 330 }}
          avatar={
            <IconButton>
              <ArrowBackIcon sx={{ color: "white" }} />
            </IconButton>
          }
          action={
            <IconButton>
              <ShoppingCartSharpIcon sx={{ color: "white" }} />
            </IconButton>
          }
        />
        <CardMedia
          component="img"
          height="194"
          image={`${
            state?.productDescription &&
            state.productDescription.imagenes[1].url
          }`}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ textAlign: "left" }}
          >
            {state.productDescription && state.productDescription.nombre}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: "left", weigth: "bold" }}
          >
            $ {state.productDescription && state.productDescription.precio}
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            Información adicional
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            {state.productDescription && state.productDescription.descripcion}
          </Typography>
        </CardContent>
      </MyCard>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ padding: "1em" }}
      >
        <DivCarrito
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <IconButton>
            <RemoveCircleRoundedIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="p">1</Typography>
          <IconButton>
            <AddCircleRoundedIcon sx={{ color: "white" }} />
          </IconButton>
        </DivCarrito>

        <Link to="/cart">
          <DivCarrito
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="p" component="p" sx={{}}>
              agregar al carrito
            </Typography>
          </DivCarrito>
        </Link>

        {/* <Button variant="contained">
        agregar al carrito
      </Button> */}
      </Stack>
    </ViewProduct>
  );
}

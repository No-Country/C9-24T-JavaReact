import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import { Link, useParams } from "react-router-dom";
// *************redux***************
import { getProductDescription } from "../../../redux/action";

// *************Component materials***************
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
// *************Component icons***************
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
// *************Component others***************
import { TopDescription } from "../../Common/TopDescription";
import { validarImg } from "../../../helpers";

const ViewProduct = styled(Container)`
  height: 100vh;
  padding: 0;
`;

const MyCard = styled(Card)`
  width: 360px;
  height: 80vh;
`;

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
  }, [dispatch, id]);

  return (
    <ViewProduct>
      <MyCard>
        <TopDescription />
        <CardMedia
          // sx={{ marginTop: "-13px" }}
          component="img"
          height="275"
          image={`${state && validarImg(state.productDescription.imagenes)}`}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="h5"
            color="text.primary"
            sx={{ textAlign: "left" }}
          >
            {state && state.productDescription.nombre}
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: "left", weigth: "bold" }}
          >
            $ {state && state.productDescription.precio}
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
            {state && state.productDescription.descripcion}
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
      </Stack>
    </ViewProduct>
  );
}

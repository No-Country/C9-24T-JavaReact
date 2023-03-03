import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import { Link, useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../helpers";
// *************redux***************
import { getProductDescription } from "../../../redux/action";
import { agregarProductoCarrito } from "../../../redux/action";
import { updateProductoCarrito } from "../../../redux/action";

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
  Chip,
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
  width: "100%";
`;

const MyCard = styled(Card)`
  /* width: 360px; */
  height: 90vh;
  width: "100%";
`;

const DivCarrito = styled(Stack)`
  background: #00838f;
  color: white;
  border-radius: 15px;
  width: 10rem;
  height: 2.5em;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
`;

const DivCarritoDisable = styled(Stack)`
  background: #d9d9d9;
  color: #000000;
  border-radius: 15px;
  width: 10rem;
  height: 2.5em;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
`;

export default function RecipeReviewCard() {
  const [counter, setCounter] = useState(0);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDescription(id));
  }, [dispatch, id]);

  const handleReducir = () => {
    if (counter <= 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  const handleAumenta = () => {
    if (counter < state.productDescription.stock) {
      setCounter(counter + 1);
    } else {
      setCounter(state.productDescription.stock);
    }
  };

  const handleAgregar = (e) => {
    if (counter !== 0) {
      const esta = state.itemsCarrito.some(
        (item) => item.idProduct == state.productDescription.id
      );

      if (!esta) {
        dispatch(
          agregarProductoCarrito({
            idProduct: state.productDescription.id,
            counter,
            precio: state.productDescription.precio,
          })
        );
      } else {
        dispatch(
          updateProductoCarrito(state.productDescription.id, { counter })
        );
        console.log(state.itemsCarrito, "actu");
      }
    } else {
      // setDisabled({
      //   opacity: 0.5,
      //   pointerEvents: "none",
      //   backgroundColor: "red",
      // });

      console.log(e.target);
      e.preventDefault();
    }
  };

  // console.log(state.productDescription.stock);
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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              component="h5"
              variant="h5"
              color="text.primary"
              sx={{
                textAlign: "left",
                fontWeight: "bold",
                fontFamily: "roboto",
              }}
            >
              {state && state.productDescription.nombre
                ? capitalizeFirstLetter(state.productDescription.nombre)
                : state.productDescription.nombre}
            </Typography>
            {state && state.productDescription.stock === 0 && (
              <Chip label="Sin Stock" color="warning" size="small" />
            )}
          </Stack>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              textAlign: "left",
              weigth: "bold",
              color: "black",
              fontFamily: "roboto",
            }}
          >
            $ {state && state.productDescription.precio}
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ textAlign: "left", color: "black", fontFamily: "roboto" }}
          >
            Información adicional
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left", fontFamily: "roboto" }}
          >
            {state && state.productDescription.descripcion}
          </Typography>
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            paddingTop={4}
            sx={{ flexWrap: "wrap" }}
          >
            {!state.productDescription.caracteristicas
              ? "sin caracteristicas"
              : state &&
                state.productDescription.caracteristicas.map((data) => (
                  <Chip
                    sx={{ margin: "1em" }}
                    key={data.id}
                    label={data.nombre}
                    size="medium"
                  />
                ))}
          </Stack>
        </CardContent>
      </MyCard>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ height: "3.625em", padding: "0.3em 0.2em" }}
        backgroundColor="#673AB7"
      >
        <DivCarrito
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <IconButton onClick={handleReducir}>
            <RemoveCircleRoundedIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="p">{counter}</Typography>
          <IconButton onClick={handleAumenta}>
            <AddCircleRoundedIcon sx={{ color: "white" }} />
          </IconButton>
        </DivCarrito>

        <Link to="/cart">
          {counter !== 0 ? (
            <DivCarrito
              direction="row"
              justifyContent="center"
              alignItems="center"
              onClick={handleAgregar}
            >
              <Typography
                variant="p"
                component="p"
                sx={{ fontFamily: "roboto" }}
              >
                AGREGAR
              </Typography>
            </DivCarrito>
          ) : (
            <DivCarritoDisable
              direction="row"
              justifyContent="center"
              alignItems="center"
              onClick={handleAgregar}
            >
              <Typography
                variant="p"
                component="p"
                sx={{ fontFamily: "roboto" }}
              >
                AGREGAR
              </Typography>
            </DivCarritoDisable>
          )}
          {/* <DivCarrito
            direction="row"
            justifyContent="center"
            alignItems="center"
            onClick={handleAgregar}
          >
            <Typography variant="p" component="p" sx={{ fontFamily: "roboto" }}>
              AGREGAR
            </Typography>
          </DivCarrito> */}
        </Link>
      </Stack>
    </ViewProduct>
  );
}

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import axios from "axios";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

// *****************HELPERS****************
import { validarImg } from "../../../helpers";

// *****************HOOKS****************
import { useCounterProduct } from "../../../hooks/useCounterProduct";

export default function CartSelectCard({ idProducto }) {
  const {
    counter,
    producto,
    incrementarCounter,
    disminuirCounter,
    eliminarProd,
  } = useCounterProduct(idProducto);

  // console.log(producto);

  return (
    <Card sx={{ display: "flex", borderRadius: "15px", margin: "1em" }}>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100 }}
        image={`${validarImg(producto.imagenes)}`}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: 220 }}>
        <CardContent sx={{ flex: "1 0 auto", padding: "1em 0 0 1em" }}>
          <Typography
            component="div"
            variant="caption"
            sx={{
              textAlign: "left",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "0.875rem",
              color: "black",
            }}
          >
            {producto.nombre}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{
              textAlign: "left",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "0.875rem",
              color: "black",
            }}
          >
            ${producto.precio}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
            /* pl: 1,
            pb: 1, */
          }}
        >
          {counter === 1 ? (
            <IconButton
              onClick={() => eliminarProd(idProducto)}
              aria-label="remove"
            >
              <DeleteForeverRoundedIcon
                sx={{
                  color: "red",
                }}
              />
            </IconButton>
          ) : (
            <IconButton onClick={disminuirCounter} aria-label="remove">
              <RemoveCircleRoundedIcon
                sx={{
                  color: "#00838F",
                }}
              />
            </IconButton>
          )}

          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "0.875rem",
              color: "black",
            }}
            variant="p"
          >
            {counter}
          </Typography>
          <IconButton onClick={incrementarCounter} aria-label="add">
            <AddCircleRoundedIcon
              sx={{
                color: "#00838F",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

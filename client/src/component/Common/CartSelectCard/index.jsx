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

import { conterModify } from "../../../redux/action";

import { validarImg } from "../../../helpers";

export default function CartSelectCard({ idProduct }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const theme = useTheme();
  const [product, setProduct] = useState({});

  const productState = state.itemsCarrito.find(
    (prod) => prod.idProduct === idProduct
  );

  console.log(productState, "ESTADO");

  // let customers = useSelector((state) => state.customer);
  // let customer = customers?.find((c) => c.email === user?.email);

  useEffect(() => {
    axios
      .get(`http://3.88.177.40:8080/producto/${idProduct}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idProduct]);

  const handleReducir = () => {
    if (productState.counter <= 1) {
      dispatch(conterModify(idProduct, 1));
    } else {
      dispatch(conterModify(idProduct, productState.counter - 1));
    }
  };

  const handleAumenta = () => {
    if (counter < state.productDescription.stock) {
      setCounter(counter + 1);
    } else {
      setCounter(state.productDescription.stock);
    }
  };

  return (
    <Card sx={{ display: "flex", borderRadius: "15px", margin: "1em" }}>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100 }}
        image={`${validarImg(product.imagenes)}`} // `${state && validarImg(state.productDescription.imagenes)}`
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: 220 }}>
        <CardContent sx={{ flex: "1 0 auto", paddingBottom: 0 }}>
          <Typography
            component="div"
            variant="caption"
            sx={{ textAlign: "left", fontWeight: "bold" }}
          >
            {product.nombre}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ textAlign: "left" }}
          >
            ${product.precio}
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
          <IconButton aria-label="remove" onClick={handleReducir}>
            <RemoveCircleRoundedIcon />
          </IconButton>
          <Typography variant="p">{productState.counter}</Typography>
          <IconButton aria-label="add" onClick={handleAumenta}>
            <AddCircleRoundedIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

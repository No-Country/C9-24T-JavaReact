import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import { fontWeight } from "@mui/system";

export default function CardProduct() {
  return (
    <Card sx={{ width: 156, borderRadius: "15px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="128"
          image="https://plus.unsplash.com/premium_photo-1669495128216-5ab3274ec078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            variant="caption"
            component="div"
            sx={{ textAlign: "left", fontWeight: "bold" }}
          >
            Nombre de producto
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left" }}
          >
            $$$$$
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

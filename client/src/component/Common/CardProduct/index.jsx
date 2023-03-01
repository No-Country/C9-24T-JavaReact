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

export default function CardProduct({ title, precio, img }) {
  return (
    <Card sx={{ width: 156, borderRadius: "15px", margin: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="128"
          image={`${img}`}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            variant="caption"
            component="div"
            sx={{ textAlign: "left" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="black"
            sx={{ textAlign: "left", fontWeight: "bold", fontSize: "12px" }}
          >
            {`$${precio}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

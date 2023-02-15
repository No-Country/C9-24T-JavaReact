import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import RemoveCircleRoundedIcon from "@mui/icons-material/RemoveCircleRounded";

export default function CartSelectCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", borderRadius: "15px", margin: "1em" }}>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100 }}
        image="https://plus.unsplash.com/premium_photo-1669495128216-5ab3274ec078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: 220 }}>
        <CardContent sx={{ flex: "1 0 auto", paddingBottom: 0 }}>
          <Typography
            component="div"
            variant="caption"
            sx={{ textAlign: "left", fontWeight: "bold" }}
          >
            Nombre del producto
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ textAlign: "left" }}
          >
            $$$$$$
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
          <IconButton aria-label="remove">
            <RemoveCircleRoundedIcon />
          </IconButton>
          <Typography variant="p">1</Typography>
          <IconButton aria-label="add">
            <AddCircleRoundedIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

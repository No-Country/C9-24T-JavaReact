import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CategoryCard() {
  return (
    <Card
      sx={{
        width: "160px",
        height: "120px",
        padding: 0,
        margin: 0,
        borderRadius: "15px",
      }}
    >
      <CardContent
        sx={{
          width: "160px",
          height: "120px",
          border: "1px solid red",
          borderRadius: "15px",
          padding: 0,
          marging: 0,
          backgroundColor: "green",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2">Bebidas</Typography>
      </CardContent>
    </Card>
  );
}

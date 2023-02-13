import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CategoryCard() {
  return (
    <Card sx={{ width: 160, padding: 0, margin: 0 }}>
      <CardContent
        sx={{
          width: "160px",
          height: "120px",
          border: "1px solid red",
          padding: 0,
          marging: 0,
          backgroundColor: "green",
        }}
      >
        <Typography variant="body2">Bebidas</Typography>
      </CardContent>
    </Card>
  );
}

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CategoryCard({ title, img }) {
  return (
    <Card
      sx={{
        width: "160px",
        height: "120px",
        padding: 0,
        margin: 0,
        backgroundImage: `url(
          ${img}
        )`,
        backgroundSize: "cover",
        borderRadius: "15px",
        boxShadow: "unset",
      }}
    >
      {/* <CardMedia image={`${img}`} component="img" /> */}
      <CardContent
        sx={{
          width: "160px",
          height: "120px",
          borderRadius: "15px",
          padding: 0,
          marging: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          // backgroundColor: "red",
          boxShadow: "unset",
        }}
      >
        <Typography variant="body2" sx={{ marginBottom: "0.5em" }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

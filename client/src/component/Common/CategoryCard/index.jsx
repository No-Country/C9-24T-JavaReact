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
        width: { xs: 160, sm: 192, md: 224, lg: 272 },
        height: { xs: 120, sm: 144, md: 168, lg: 204 },
        padding: 0,
        margin: "auto",
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
          width: { xs: 160, sm: 192, md: 224, lg: 272 },
          height: { xs: 120, sm: 144, md: 168, lg: 204 },
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
        <Typography
          variant="subtitle1"
          sx={{ marginBottom: "0.5em", fontWeight: "bold" }}
        >
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

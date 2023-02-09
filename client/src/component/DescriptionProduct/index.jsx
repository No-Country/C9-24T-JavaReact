import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

const MyCard = styled(Card)`
height: 100vh;
`;



export default function RecipeReviewCard() {


  return (
    <>
    <MyCard sx={{ width: 360}}>
      <CardHeader  sx={{ position: 'absolute',
            zIndex: 2, width:330,}}
        avatar={
          <ArrowBackIcon sx={{ color:'white' }}/>
        }
        action={
          <IconButton>
            <ShoppingCartSharpIcon sx={{ color: "white" }} />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image="https://plus.unsplash.com/premium_photo-1669495128216-5ab3274ec078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          variant="h5"
          color="text.primary"
          sx={{ textAlign: "left" }}
        >
          This impressive
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ textAlign: "left", weigth: "bold" }}
        >
          $$$$$
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ textAlign: "left" }}
        >
          Información adicional
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{textAlign: "left"}}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </MyCard>
    </>

  )
}

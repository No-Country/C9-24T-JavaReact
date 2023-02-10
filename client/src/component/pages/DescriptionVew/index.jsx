import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Container,
  Stack,
  Button,
  Box
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

const MyCard = styled(Card)`
width: 360px;
height: 80vh;

`;


const ViewProduct = styled(Container)`
height: 100vh;
padding:0;
`;

// const DivProduct = styled(Box)`
// background:black;
// color:white;
// border-radius:15px;
// with:10em;
// height:2.5em;
// padding:0 0.5em
// `;

const DivCarrito = styled(Stack)`
background:black;
color:white;
border-radius:15px;
with:10em;
height:2.5em;
padding:0 0.7em
`;


export default function RecipeReviewCard() {


  return (
    <ViewProduct>
    <MyCard>
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
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{padding:"1em"}}>
      <DivCarrito direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <IconButton>
            <RemoveCircleRoundedIcon sx={{ color: "white" }} />
          </IconButton>
          <Typography variant="p">
         1
          </Typography>
          <IconButton>
            <AddCircleRoundedIcon sx={{ color: "white" }} />
          </IconButton>  
      </DivCarrito>

      <DivCarrito direction="row" justifyContent="center" alignItems="center">
            <Typography variant="p" component="p" sx={{}}>
            agregar al carrito
            </Typography>
      </DivCarrito>

      {/* <Button variant="contained">
        agregar al carrito
      </Button> */}
    </Stack>
    </ViewProduct>

  )
}

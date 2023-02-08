import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite"; //@mui/icons-material/Favorite
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function RecipeReviewCard() {



  return (
    <Card sx={{ width: 360 }}>
      <CardHeader  sx={{ position: 'absolute',
            zIndex: 2, width:330,}}
        avatar={
          <ArrowBackIcon sx={{ color:'white' }}/>
        }
        action={
          <IconButton>
            <ShoppingCartSharpIcon sx={{ color:'white' }}/>
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
        <Typography variant="h5" color="text.primary" sx={{textAlign: "left"}}>
          This impressive 
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{textAlign: "left",weigth:"bold"}}>
          $$$$$
        </Typography>

        <Typography variant="h6" color="text.secondary" sx={{textAlign: "left"}}>
          Información adicional
        </Typography>

        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <div></div>
      
    </Card>
  );
}

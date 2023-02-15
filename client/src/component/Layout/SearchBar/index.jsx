import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

export default function SearchBar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#777777", width: "360px" }}
    >
      <Toolbar>
        <IconButton>
          <ArrowBackIcon sx={{ color: "white" }} />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "left", marginLeft: "1em" }}
        >
          Bebidas
        </Typography>
        <IconButton>
          <ShoppingCartSharpIcon sx={{ color: "white" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

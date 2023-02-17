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
import { TopCategory } from "../../Common/TopCategory";

export default function SearchBar({ isSearch, isCategory, isTitle }) {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#777777", width: "360px" }}
    >
      <Toolbar>Nombre de la app {isCategory && <TopCategory />}</Toolbar>
    </AppBar>
  );
}

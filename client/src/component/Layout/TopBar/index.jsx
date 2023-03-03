import { useSelector, useDispatch } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TopCategory from "../../Common/TopCategory";
import TopSearch from "../../Common/TopSearch";
import TopCart from "../../Common/TopCart";

import kioscoApp from "../../../assets/imagenes/kioscoApp_white.png";

export function TopBar({ isSearch, isCategory, isTitle, isCart }) {
  const state = useSelector((state) => state);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#673AB7",
        minWidth: {
          xs: 360,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      }}
    >
      <Toolbar>
        {/* {console.log(state && state.search)} */}
        {state && state.search ? (
          <TopSearch />
        ) : isCart ? (
          <TopCart />
        ) : isSearch ? (
          <TopSearch />
        ) : isCategory ? (
          <TopCategory />
        ) : (
          <img src={kioscoApp} alt="" />
        )}
      </Toolbar>
    </AppBar>
  );
}

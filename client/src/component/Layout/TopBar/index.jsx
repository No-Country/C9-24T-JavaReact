import { useSelector, useDispatch } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TopCategory from "../../Common/TopCategory";
import TopSearch from "../../Common/TopSearch";
import TopCart from "../../Common/TopCart";

export default function TopBar({ isSearch, isCategory, isTitle, isCart }) {
  const state = useSelector((state) => state);

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#777777", width: "360px" }}
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
          <h4 style={{ margin: 0 }}>nombre de la app</h4>
        )}
      </Toolbar>
    </AppBar>
  );
}

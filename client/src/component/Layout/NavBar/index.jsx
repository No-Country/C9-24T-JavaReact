import * as React from "react";
import { styled } from "@mui/material/styles";

import { useSelector, useDispatch } from "react-redux";
import { togleSearch } from "../../../redux/action";

import { AppBar, Box } from "@mui/material/";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import { Link, Outlet } from "react-router-dom";

const MyAppBar = styled(Box)`
  position: fixed;
  bottom: 0;
  z-index: 1100;
`;

export function NavBar() {
  const dispatch = useDispatch();

  const handleAddBuscar = () => {
    dispatch(togleSearch(true));
  };
  const handleremoveBuscar = () => {
    dispatch(togleSearch(false));
  };

  return (
    <MyAppBar sx={{ width: "360px" }}>
      <BottomNavigation
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
          textDecoration: "none",
          backgroundColor: "#673AB7",
        }}
        // value={value}
        /* onChange={(event, newValue) => {
          setValue(newValue);
        }} */
      >
        <Link to="/">
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            showLabel
            onClick={handleremoveBuscar}
          />
        </Link>

        <BottomNavigationAction
          showLabel
          label="Buscar"
          icon={<SearchIcon />}
          onClick={handleAddBuscar}
        />

        <Link to="/">
          <BottomNavigationAction
            showLabel
            label="Cuenta"
            icon={<PersonIcon />}
          />
        </Link>
      </BottomNavigation>

      <Outlet />
    </MyAppBar>
  );
}

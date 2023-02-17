import * as React from "react";
import { styled } from "@mui/material/styles";

import { AppBar, Box } from "@mui/material/";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import { Link, Outlet } from "react-router-dom";

const MyAppBar = styled(Box)`
  position: fixed;
  bottom: 0;
  z-index: 1100;
`;

export default function NavBar() {
  //   const [value, setValue] = React.useState(0);

  return (
    <MyAppBar sx={{ width: 360 }}>
      <BottomNavigation
      // value={value}
      /* onChange={(event, newValue) => {
          setValue(newValue);
        }} */
      >
        <Link to="/">
          <BottomNavigationAction label="Home" icon={<HomeIcon />} showLabel />
        </Link>

        <Link to="/category">
          <BottomNavigationAction
            showLabel
            label="Buscar"
            icon={<SearchIcon />}
          />
        </Link>

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

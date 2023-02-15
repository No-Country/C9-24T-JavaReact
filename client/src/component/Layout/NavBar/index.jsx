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
        showLabels
        // value={value}
        /* onChange={(event, newValue) => {
          setValue(newValue);
        }} */
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Buscar" icon={<SearchIcon />} />
        <BottomNavigationAction label="Cuenta" icon={<PersonIcon />} />
      </BottomNavigation>
    </MyAppBar>
  );
}

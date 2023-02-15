import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import RestoreIcon from "@mui/icons-material/Restore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export default function NavBar() {
  //   const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 360, alignSelf: "flex-end" }}>
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
    </Box>
  );
}

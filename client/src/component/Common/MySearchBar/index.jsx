// import * as React from "react";
// import React, { useEffect, useState } from "react";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";

// import SearchIcon from "@mui/icons-material/Search";
// import Box from "@mui/material/Box";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// export default function MySearch() {
//   console.log("my search");
//   const { searchValue, setSearchValue } = useState("");

//   const onSearchValueChange = (e) => {
//     console.log(e.target.value);
//     setSearchValue(e.target.value);
//     console.log(searchValue);
//   };

//   useEffect(() => {
//     console.log(searchValue);
//   }, [searchValue]);

//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="static" sx={{ backgroundColor: "#777777" }}>
//           <Toolbar>
//             <Search>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <InputBase
//                 value={searchValue}
//                 onChange={onSearchValueChange}
//                 placeholder="Search…"
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </Search>
//             <Button variant="text" color="primary">
//               sdas
//             </Button>
//             <TextField
//               type="search"
//               id=""
//               label="Search"
//               value={searchValue}
//               onChange={onSearchValueChange}
//             />
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </>
//   );
// }

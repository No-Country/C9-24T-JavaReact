import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { togleSearch } from "../../../redux/action";
import { buscarProductos } from "../../../redux/action";
import { borrarProductos } from "../../../redux/action";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function TopSearch() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  // useEffect(() => {
  //   console.log(searchValue);
  // }, [searchValue]);

  const handleremoveBuscar = () => {
    dispatch(togleSearch(false));
    dispatch(borrarProductos());
  };

  const onSearchValueChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
    console.log(searchValue, "enviado");
    dispatch(buscarProductos(searchValue));
  };

  return (
    <>
      <Search onBlur={handleremoveBuscar}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={searchValue}
          onChange={onSearchValueChange}
          placeholder="Buscar..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </>
  );
}

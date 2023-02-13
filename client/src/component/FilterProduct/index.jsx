import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Select, FormControl, Stack } from "@mui/material/";

import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

export default function Filter() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <FormControl sx={{ m: 1 }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <FilterAltRoundedIcon sx={{ color: "gray" }} />
          <Select
            sx={{ width: 300, textAlign: "left" }}
            value={age}
            onChange={handleChange}
            displayEmpty
          >
            <MenuItem value="">
              <em>Filtro</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      </FormControl>
    </>
  );
}

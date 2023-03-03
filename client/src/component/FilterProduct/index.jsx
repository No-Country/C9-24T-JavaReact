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
            <MenuItem value={10}>contiene gluten</MenuItem>
            <MenuItem value={20}>contiene lactosa</MenuItem>
            <MenuItem value={30}>contiene azúcar</MenuItem>
            <MenuItem value={30}>alto en azúcar</MenuItem>
            <MenuItem value={30}>alto en sodio</MenuItem>
          </Select>
        </Stack>
      </FormControl>
    </>
  );
}

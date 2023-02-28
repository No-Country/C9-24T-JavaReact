import React from "react";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import kioscoApp from "../../../assets/imagenes/kioscoAppPNG.png";

export default function LoginView() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: "360px" }}
      >
        <div>
          <img src={kioscoApp} alt="" />
        </div>
        <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
          <TextField
            id="Usuario"
            label="Usuario"
            variant="outlined"
            fullWidth
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box sx={{ paddingTop: "2em" }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: "15px",
              padding: "1em 3em",
              lineHeight: "16px",
              backgroundColor: "#00838F",
            }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}

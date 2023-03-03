import { useLogin } from "../../../hooks/useLogin";

import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import kioscoApp from "../../../assets/imagenes/kioscoAppPNG.png";
import Styles from "../LoginView/Login.css";

import { MyAlert } from "../../Common/MyAlert";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { color } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#673AB7",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#00838F",
      // dark: will be calculated from palette.secondary.main,
    },
  },
});

export default function LoginView() {
  const {
    login,
    alertLogin,
    showPassword,
    handleClickShowPassword,
    handleInputChange,
    handleSubmit,
  } = useLogin();

  console.log(login.email);
  console.log(login.password);
  console.log(alertLogin, "en vista");

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
        <ThemeProvider theme={theme}>
          <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
            <TextField
              name="email"
              color="primary"
              autoFocus="true"
              label="Usuario"
              variant="outlined"
              value={login.email}
              onChange={handleInputChange}
              fullWidth
            />
          </FormControl>
        </ThemeProvider>

        <ThemeProvider theme={theme}>
          <FormControl sx={{ m: 1, width: "300px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Contraseña
            </InputLabel>
            <OutlinedInput
              name="password"
              className="outLine"
              color="primary"
              value={login.password}
              onChange={handleInputChange}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    color="primary"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </ThemeProvider>

        <Box sx={{ paddingTop: "2em" }}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            className="Button"
            sx={{
              textTransform: "none",
              borderRadius: "15px",
              padding: "1em 3em",
              lineHeight: "16px",
              backgroundColor: "#00838F",
              fontFamily: "roboto",
            }}
          >
            INGRESAR
          </Button>
        </Box>
      </Stack>
      {alertLogin && (
        <MyAlert
          type="warning"
          delay={7000}
          msg="El usuario y/o la contraseña ingresada es incorrecta. Por favor, intenta nuevamente."
        />
      )}
    </Stack>
  );
}

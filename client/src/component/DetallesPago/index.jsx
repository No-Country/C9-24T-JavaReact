import { Container, Typography, Stack, Box } from "@mui/material/";
import { convertCurrency } from "../../helpers";
import { useSelector, useDispatch } from "react-redux";

export const DetallesPago = ({ title, monto }) => {
  return (
    <Stack
      direction="row"
      sx={{ backgroundColor: "white", marginTop: "0.75em" }}
    >
      <Typography
        variant="caption"
        sx={{
          // display: "inline",
          textAlign: "left",
          padding: "0em 0 0 0.5em",
          paddingLeft: "2em",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "0.875rem",
          color: "black",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          // display: "inline",
          textAlign: "right",
          padding: "0.5em 0 0 0.5em",
          margin: "0 2em 0 auto",
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "0.875rem",
          color: "black",
        }}
      >
        {title !== "Descuento"
          ? convertCurrency({ currency: "USD", value: monto })
          : `- ${convertCurrency({ currency: "USD", value: monto })}`}
      </Typography>
    </Stack>
  );
};

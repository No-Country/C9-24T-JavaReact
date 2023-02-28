import * as React from "react";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  Typography,
  Stack,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material/";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DetallesPago } from "../DetallesPago";

const DivCarrito = styled(Stack)`
  color: white;
  background: #00838f;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 10em;
  height: 2.5em;
  padding: 0 0.7em;
`;

const ContainerPago = styled(Box)`
  position: fixed;
  bottom: 0;
  z-index: 1100;
  width: 100%;
`;

export const Pago = () => {
  const saldo = useSelector((state) => state && state.saldo);

  console.log(saldo, "cartt");

  return (
    <ContainerPago>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>Detalles</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DetallesPago title="Saldo" monto={saldo} />
          <DetallesPago title="Descuento" monto={0} />
          <DetallesPago title="Total" />
        </AccordionDetails>
      </Accordion>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          padding: "0.2em 0 0.2em 0",
          height: "40px",
          backgroundColor: "#673AB7",
          height: "3.625em",
        }}
      >
        <DivCarrito direction="row" justifyContent="center" alignItems="center">
          <Typography variant="p" component="p" sx={{}}>
            COMPRAR
          </Typography>
        </DivCarrito>
      </Stack>
    </ContainerPago>
  );
};

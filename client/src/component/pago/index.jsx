import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../Layout/Modal";
import { MyAlert } from "../Common/MyAlert";

import { updateSaldoUser, crearPedido } from "../../redux/action";

import {
  Container,
  Typography,
  Stack,
  Box,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
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
  const dispatch = useDispatch();

  const saldo = useSelector((state) => state && state.saldo);
  const items = useSelector((state) => state.itemsCarrito);
  const [total, setTotal] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [alertaSaldo, setAlertaSaldo] = useState(false);

  const totalPagar = (productos) => {
    const pagar = productos.reduce(
      (acumulado, producto) => acumulado + producto.precio * producto.counter,
      0
    );
    return pagar;
  };

  useEffect(() => {
    setTotal(totalPagar(items));
  }, []);

  useEffect(() => {
    setTotal(totalPagar(items));
    setAlertaSaldo(false);
  }, [items]);

  console.log(total);

  console.log(saldo, "cartt");

  const pagarProductos = () => {
    if (saldo < total) {
      setAlertaSaldo(true);
    } else {
      if (total > 0) {
        // actualizar el estado de saldo.
        const newSaldo = saldo - total;
        console.log(newSaldo);
        dispatch(updateSaldoUser(newSaldo));
        dispatch(crearPedido({ productos: items }));
        setOpenModal(true);
      }
      // setAlertaSaldo(false);
    }
  };

  console.log(alertaSaldo);

  return (
    <>
      <ContainerPago>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ fontWeight: "bold", fontFamily: "roboto" }}>
              Detalles
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingTop: 0 }}>
            <DetallesPago title="Saldo" monto={saldo} />
            <DetallesPago title="Descuento" monto={0} />
            <Divider sx={{ marginTop: "0.75em" }} />
            <DetallesPago title="Total" monto={total} />
          </AccordionDetails>
        </Accordion>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            padding: "0.2em 0 0.2em 0",
            // height: "40px",
            backgroundColor: "#673AB7",
            height: "3.625em",
          }}
        >
          <DivCarrito
            onClick={pagarProductos}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="p" component="p" sx={{ fontFamily: "roboto" }}>
              COMPRAR
            </Typography>
          </DivCarrito>
        </Stack>
      </ContainerPago>
      {alertaSaldo && (
        <MyAlert
          type="warning"
          delay={5000}
          msg="No tenés saldo suficiente para comprar!!"
        />
      )}
      {openModal && (
        <Modal>
          <p>sdadas</p>
        </Modal>
      )}
    </>
  );
};

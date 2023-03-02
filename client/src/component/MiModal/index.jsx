import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { vaciarCarrito } from "../../redux/action";

import { Typography, Stack, Box, Modal, Button } from "@mui/material/";

export const MiModal = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const pedido = useSelector((state) => state && state.pedido);

  const backHome = () => {
    navigate("/");
    dispatch(vaciarCarrito());
  };

  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={true}
      // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "white",
          boxShadow:
            "0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "4px",
          padding: "1.5em",
          margin: "0 1em 0 1em",
        }}
      >
        <Typography
          sx={{ fontFamily: "Roboto", fontWeight: "700", marginRight: "auto" }}
          variant="h6"
          component="h2"
        >
          ¡Listo!
        </Typography>
        <Typography
          sx={{
            fontFamily: "Roboto",
            fontWeight: "500",
            color: "#777777",
            marginTop: "1em",
          }}
          variant="h6"
          component="h2"
        >
          Ya podés retirar tu pedido en el kiosco.
        </Typography>
        <Box
          sx={{
            border: "1px solid #D9D9D9",
            padding: "10px 20px",
            margin: "1em 0 1em 0",
          }}
        >
          <Typography
            sx={{ fontFamily: "Roboto", fontWeight: "700" }}
            variant="h6"
            component="h2"
          >
            Pedido {`#0000${pedido}`}
          </Typography>
        </Box>
        <Button
          onClick={backHome}
          sx={{ fontWeight: "700", marginLeft: "auto", color: "#00838F" }}
        >
          Aceptar
        </Button>
      </Stack>
    </Modal>
  );
};

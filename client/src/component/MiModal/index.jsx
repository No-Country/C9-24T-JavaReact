import {
  Container,
  Typography,
  Stack,
  Box,
  Modal,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material/";

export const MiModal = (open) => {
  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      open={open}
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
            Pedido #00001
          </Typography>
        </Box>
        <Button
          sx={{ fontWeight: "700", marginLeft: "auto", color: "#00838F" }}
        >
          Aceptar
        </Button>
      </Stack>

      {/* <Box sx={{ backgroundColor: "white" }}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box> */}
    </Modal>
  );
};

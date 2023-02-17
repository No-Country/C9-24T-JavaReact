import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function TopCart() {
  return (
    <>
      <IconButton>
        <ArrowBackIcon sx={{ color: "white" }} />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "left", marginLeft: "1em" }}
      >
        Resumen de compra
      </Typography>
    </>
  );
}

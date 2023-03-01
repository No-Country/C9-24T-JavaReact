import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function TopCart() {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  return (
    <>
      <IconButton onClick={handleBack}>
        <ArrowBackIcon sx={{ color: "white" }} />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "left", marginLeft: "1em" }}
      >
        Carrito
      </Typography>
    </>
  );
}

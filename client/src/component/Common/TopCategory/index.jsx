import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

export default function TopCategory() {
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
        sx={{ textAlign: "left", marginLeft: "1em", fontFamily: "roboto" }}
      >
        Productos
      </Typography>
      <IconButton sx={{ marginLeft: "auto" }}>
        <ShoppingCartSharpIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
}

import { useNavigate } from "react-router-dom";

// *************Component materials***************
import { CardHeader, IconButton } from "@mui/material";
// *************Component icons***************
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

export function TopDescription() {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }

  return (
    <CardHeader
      sx={{ position: "absolute", zIndex: 2, width: 330 }}
      avatar={
        <IconButton onClick={handleBack}>
          <ArrowBackIcon sx={{ color: "white" }} />
        </IconButton>
      }
      action={
        <IconButton>
          <ShoppingCartSharpIcon sx={{ color: "white" }} />
        </IconButton>
      }
    />
  );
}

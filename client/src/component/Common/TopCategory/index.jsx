import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

export default function TopCategory() {
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
        Bebidas
      </Typography>
      <IconButton sx={{ marginLeft: "auto" }}>
        <ShoppingCartSharpIcon sx={{ color: "white" }} />
      </IconButton>
    </>
  );
}

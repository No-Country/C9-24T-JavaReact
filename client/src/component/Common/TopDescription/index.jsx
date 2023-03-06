import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

// *************Component materials***************
import { CardHeader, IconButton } from "@mui/material";
// *************Component icons***************
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

const MyCardHeader = styled(CardHeader)`
  // background-color: black;
  // opacity: 0.15;
`;

export function TopDescription() {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }

  return (
    <MyCardHeader
      sx={{
        position: "absolute",
        zIndex: 2,
        width: {
          xs: "90%",
          sm: "90%",
          md: "90%",
          lg: "1100px",
          xl: "1100px",
        },
        marginRight: "15em",
      }}
      avatar={
        <IconButton onClick={handleBack}>
          <ArrowBackIcon sx={{ color: "#673AB7" }} />
        </IconButton>
      }
      action={
        <IconButton>
          <ShoppingCartSharpIcon sx={{ color: "#673AB7" }} />
        </IconButton>
      }
    />
  );
}

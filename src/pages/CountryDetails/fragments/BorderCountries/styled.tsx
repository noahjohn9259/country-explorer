import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

export const CustomButton = styled(Button)<ButtonProps>(() => ({
  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
  marginLeft: 8,
  marginBottom: 1,
  textTransform: "none",
  borderColor: "transparent",
  color: "#000",
  "&:hover": {
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
}));

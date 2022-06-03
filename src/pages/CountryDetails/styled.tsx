import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

export const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 0px 4px rgba(0, 0, 0, 0.15)"
      : "0px 0px 8px rgba(0, 0, 0, 0.3)",
  fontSize: theme.typography.body1.fontSize,
  marginLeft: theme.spacing(1),
  textTransform: "none",
  borderColor: "transparent",
  color: theme.palette.mode === "light" ? "#000" : "#fff",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  paddingLeft: theme.spacing(4.5),
  paddingRight: theme.spacing(4.5),
  lineHeight: theme.spacing(2.75),
  "&:hover": {
    borderColor: "transparent",
  },
}));

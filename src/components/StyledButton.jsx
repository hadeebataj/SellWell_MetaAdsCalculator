import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  width: "10rem",
  height: "3.5rem",
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  color: "white",
  backgroundColor: "#ec4b46",
  borderColor: "#ec4b46",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#fd6f6a",
    borderColor: "#fd6f6a",
    boxShadow: "none",
    color: "white",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#fd6f6a",
    borderColor: "#fd6f6a",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(253, 111, 106, 1)",
  },
});

import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { StyledButton } from "./StyledButton";
import { TextField, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

const UserInformationDialogueBox = ({
  open,
  handleClose,
  updateShowResults,
}) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const storedUserDetails = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userDetails="))
      ?.split("=")[1];

    if (storedUserDetails) {
      updateShowResults(true);
    }
  }, []);

  const handleNameChange = (event) => {
    setInputValue({
      ...inputValue,
      name: event.target.value,
    });
  };

  const handlePhoneNumberChange = (event) => {
    setInputValue({
      ...inputValue,
      phone: event.target.value,
    });
  };

  const handleEmailChange = (event) => {
    setInputValue({
      ...inputValue,
      email: event.target.value,
    });
  };

  const validateInputs = () => {
    const { name, email, phone } = inputValue;
    if (!name) return false;

    const emailRegex = /\S+@\S+\.\S+/;
    if (!email || !emailRegex.test(email)) return false;

    const phoneRegex = /^\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) return false;

    return true;
  };

  const validateEmail = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!inputValue.email || !emailRegex.test(inputValue.email))
      return "Please enter a valid email address.";
  };

  const validatePhone = () => {
    const phoneRegex = /^\d{10}$/;
    if (!inputValue.phone || !phoneRegex.test(inputValue.phone))
      return "Please enter a valid phone number.";
  };

  const handleViewResults = async () => {
    if (!validateInputs()) return;
    else {
      console.log("Form submitted with values:", inputValue);
      updateShowResults(true);
      document.cookie = `userDetails=${JSON.stringify(
        inputValue
      )}; max-age=2592000; SameSite=None; Secure`; // cookie data expires after 30 days
      // Send data to webhook
      const response = await fetch(
        "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjUwNTZlMDYzZTA0M2Q1MjZhNTUzNjUxMzMi_pc",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValue),
        }
      );

      if (!response.ok) {
        console.error("Error sending data to webhook:", response.statusText);
      }
    }
  };

  const handleCloseDialog = () => {
    if (validateInputs()) {
      setInputValue({
        name: "",
        email: "",
        phone: "",
      });
      handleClose();
    }
    handleViewResults();
  };

  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div style={{ margin: "2rem" }}>
        <DialogTitle
          id="alert-dialog-title"
          sx={{ fontSize: "2rem", textAlign: "center" }}
        >
          {"Please provide your details to see the results"}
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            gap: 4,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Typography minWidth={120}>Full Name*</Typography>
            <TextField
              id="outlined-basic"
              onChange={handleNameChange}
              value={inputValue.name}
              variant="outlined"
              size="small"
              fullWidth
              error={!inputValue.name}
              helperText={
                !inputValue.name
                  ? "Please enter your first and last name."
                  : null
              }
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Typography minWidth={120}>Email Address*</Typography>
            <TextField
              id="outlined-basic"
              onChange={handleEmailChange}
              value={inputValue.email}
              variant="outlined"
              size="small"
              fullWidth
              error={validateEmail()}
              helperText={validateEmail()}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Typography minWidth={120}>Phone Number*</Typography>
            <TextField
              id="outlined-basic"
              onChange={handlePhoneNumberChange}
              value={inputValue.phone}
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+91</InputAdornment>
                ),
              }}
              fullWidth
              error={validatePhone()}
              helperText={validatePhone()}
            />
          </div>
        </DialogContent>

        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <StyledButton variant="contained" onClick={handleCloseDialog}>
            VIEW RESULTS
          </StyledButton>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default UserInformationDialogueBox;

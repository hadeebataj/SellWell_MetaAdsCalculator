import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { StyledButton } from "./StyledButton";
import { TextField, Typography } from "@mui/material";

const UserInformationDialogueBox = ({ open, handleClose }) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [userDataSubmit, setUserDataSubmit] = useState(false);

  const handleNameChange = (event) => {
    setInputValue((prevValues) => ({
      ...prevValues,
      name: event.target.value,
    }));
  };

  const handlePhoneNumberChange = (event) => {
    setInputValue((prevValues) => ({
      ...prevValues,
      phone: event.target.value,
    }));
  };

  const handleEmailChange = (event) => {
    setInputValue((prevValues) => ({
      ...prevValues,
      email: event.target.value,
    }));
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

  const handleViewResults = () => {
    if (!validateInputs()) {
      // Show error message
      alert("Please enter correct values for all fields.");
    } else {
      // Proceed with form submission
      console.log("Form submitted with values:", inputValue);
      setUserDataSubmit(true);
      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
            <Typography minWidth={120}>Full Name</Typography>
            <TextField
              id="outlined-basic"
              onChange={handleNameChange}
              value={inputValue.name}
              variant="outlined"
              size="small"
              fullWidth
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
            <Typography minWidth={120}>Phone Number</Typography>
            <TextField
              id="outlined-basic"
              onChange={handlePhoneNumberChange}
              value={inputValue.phone}
              variant="outlined"
              size="small"
              fullWidth
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
            <Typography minWidth={120}>Email Address</Typography>
            <TextField
              id="outlined-basic"
              onChange={handleEmailChange}
              value={inputValue.email}
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
        </DialogContent>

        <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
          <StyledButton variant="contained" onClick={handleViewResults}>
            VIEW RESULTS
          </StyledButton>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default UserInformationDialogueBox;

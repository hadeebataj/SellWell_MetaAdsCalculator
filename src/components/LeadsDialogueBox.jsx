import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { StyledButton } from "./StyledButton";

const LeadsDialogueBox = ({
  open,
  handleClose,
  handleLandingPageClick,
  handleInstantFormsClick,
}) => {
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
          {"What lead generation method are you using?"}
        </DialogTitle>
        <DialogActions
          sx={{ display: "flex", justifyContent: "center", gap: 10 }}
        >
          <StyledButton variant="contained" onClick={handleInstantFormsClick}>
            INSTANT FORMS
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={handleLandingPageClick}
            autoFocus
          >
            LANDING PAGE
          </StyledButton>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default LeadsDialogueBox;

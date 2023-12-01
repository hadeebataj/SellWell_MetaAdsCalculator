import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { StyledButton } from "./StyledButton";
import styles from "./LeadsSelectionDialogBox.module.css";

const LeadsSelectionDialogBox = ({
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
      <div className={styles.dialogContainer}>
        <DialogTitle
          id="alert-dialog-title"
          className={styles.dialogTitle}
          sx={{ fontSize: "2rem", textAlign: "center" }}
        >
          {"What lead generation method are you using?"}
        </DialogTitle>
        <DialogActions
          className={styles.dialogActions}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginBottom: "1rem",
          }}
        >
          <StyledButton
            variant="contained"
            onClick={handleInstantFormsClick}
            className={styles.buttonText}
          >
            INSTANT FORMS
          </StyledButton>
          <StyledButton
            variant="contained"
            onClick={handleLandingPageClick}
            className={styles.buttonText}
          >
            LANDING PAGE
          </StyledButton>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default LeadsSelectionDialogBox;

import React from "react";
import { CardContent, Typography, Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import styles from "./MainPage.module.css";
import LeadsSelectionDialogBox from "./LeadsSelectionDialogBox";
import { StyledButton } from "./StyledButton";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleLeadsClick = () => {
    setOpen(true);
  };

  const handleLandingPageClick = () => {
    navigate("/leads/landingpage");
    setOpen(false);
  };

  const handleInstantFormsClick = () => {
    navigate("/leads/instantforms");
    setOpen(false);
  };

  const handleSalesClick = () => {
    navigate("/sales");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "6rem",
      }}
    >
      <Card
        className={styles.card}
        sx={{ maxWidth: "70vw", backgroundColor: "#222222" }}
      >
        <CardContent
          className={styles.cardContent}
          sx={{ padding: "2rem", color: "white" }}
        >
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Meta Ads Budget Calculator
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "500",
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            Identify the ideal daily budget & monthly budget to start your meta
            ads campaign
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "500",
              textAlign: "center",
              marginTop: "2rem",
            }}
          >
            Are you trying to generate leads or sales?
          </Typography>
        </CardContent>
        <CardActions
          className={styles.cardActions}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            padding: "2rem",
          }}
        >
          <StyledButton
            variant="contained"
            size="large"
            onClick={handleLeadsClick}
            autoFocus
          >
            LEADS
          </StyledButton>
          <StyledButton
            variant="contained"
            size="large"
            onClick={handleSalesClick}
          >
            SALES
          </StyledButton>
        </CardActions>
      </Card>
      <LeadsSelectionDialogBox
        open={open}
        handleClose={handleClose}
        handleLandingPageClick={handleLandingPageClick}
        handleInstantFormsClick={handleInstantFormsClick}
      />
    </div>
  );
};

export default MainPage;

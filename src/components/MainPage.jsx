import React from "react";
import { CardContent, Typography, Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import "./MainPage.css";
import LeadsDialogueBox from "./LeadsDialogueBox";
import { StyledButton } from "./StyledButton";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    navigate("/leads/landingpage");
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "6rem",
      }}
    >
      <Card sx={{ maxWidth: "70vw", backgroundColor: "#222222" }}>
        <CardContent sx={{ padding: "2rem", color: "white" }}>
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
            onClick={handleClickOpen}
          >
            LEADS
          </StyledButton>
          <StyledButton variant="contained" size="large" autoFocus>
            SALES
          </StyledButton>
        </CardActions>
      </Card>
      <LeadsDialogueBox open={open} handleClose={handleClick} />
    </div>
  );
};

export default MainPage;

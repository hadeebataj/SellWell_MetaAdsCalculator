import React, { useEffect, useState } from "react";
import {
  CardContent,
  Typography,
  Card,
  TextField,
  Slider,
  useMediaQuery,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { StyledButton } from "./StyledButton";
import InputAdornment from "@mui/material/InputAdornment";
import UserInformationDialogueBox from "./UserInformationDialogueBox";
import styles from "./LandingPage.module.css";

const LandingPage = ({ type }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [inputValue, setInputValue] = useState({
    number: 1000,
    CPMValue: 150,
    CTRValue: 1,
    CRValue: 20,
    LCValue: 80,
  });
  const [open, setOpen] = React.useState(false);
  const [showResults, setShowResults] = useState(false);
  const [totalBudgetRequired, setTotalBudgetRequired] = useState();
  const [costPerLead, setCostPerLead] = useState();

  useEffect(() => {
    const calculateOutput = () => {
      const landingPageViews = inputValue.number / (inputValue.CRValue / 100);
      const linkClicks = landingPageViews / (inputValue.LCValue / 100);
      const impressions = linkClicks / (inputValue.CTRValue / 100);

      let totalBudgetRequired = (impressions / 1000) * inputValue.CPMValue;
      totalBudgetRequired = Number(totalBudgetRequired.toFixed(2));
      setTotalBudgetRequired(totalBudgetRequired);

      let costPerLead = totalBudgetRequired / inputValue.number;
      costPerLead = Math.floor(costPerLead) + (costPerLead % 1 > 0.4 ? 1 : 0);
      if (isNaN(costPerLead)) costPerLead = 0;
      setCostPerLead(costPerLead);
    };

    const calculateOutputInstantForms = () => {
      const linkClicks = inputValue.number / (inputValue.CRValue / 100);
      const impressions = linkClicks / (inputValue.CTRValue / 100);

      let totalBudgetRequired = (impressions / 1000) * inputValue.CPMValue;
      totalBudgetRequired = Number(totalBudgetRequired.toFixed(2));
      setTotalBudgetRequired(totalBudgetRequired);

      let costPerLead = totalBudgetRequired / inputValue.number;
      costPerLead = Math.floor(costPerLead) + (costPerLead % 1 > 0.4 ? 1 : 0);
      if (isNaN(costPerLead)) costPerLead = 0;
      setCostPerLead(costPerLead);
    };

    if (type === "leads" || type === "sales") calculateOutput();
    else if (type === "instant forms") calculateOutputInstantForms();
  }, [showResults, inputValue, type]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CPMMarks = [
    {
      value: 50,
      label: `₹50`,
    },
    {
      value: 1500,
      label: `₹1500`,
    },
  ];

  const CTRMarks = [
    {
      value: 0.5,
      label: `0.5%`,
    },
    {
      value: 5,
      label: `5%`,
    },
  ];

  const CRMarks = [
    {
      value: 0.5,
      label: `0.5%`,
    },
    {
      value: 100,
      label: `100%`,
    },
  ];

  const LCMarks = [
    {
      value: 0.5,
      label: `0.5%`,
    },
    {
      value: 100,
      label: `100%`,
    },
  ];

  const handleLeadsTextFieldChange = (event) => {
    if (type === "leads" || type === "instant forms") {
      setInputValue({
        ...inputValue,
        number: Number(event.target.value),
      });
    } else if (type === "sales") {
      setInputValue({
        ...inputValue,
        number: Number(event.target.value),
      });
    }
  };

  const handleCPMSliderChange = (event, newValue) => {
    setInputValue({
      ...inputValue,
      CPMValue: newValue,
    });
  };

  const handleCPMTextFieldChange = (event) => {
    setInputValue({
      ...inputValue,
      CPMValue: Number(event.target.value),
    });
  };

  const handleCTRSliderChange = (event, newValue) => {
    setInputValue({
      ...inputValue,
      CTRValue: newValue,
    });
  };

  const handleCTRTextFieldChange = (event) => {
    setInputValue({
      ...inputValue,
      CTRValue: Number(event.target.value >= 0.5 ? event.target.value : 0.5),
    });
  };

  const handleCRSliderChange = (event, newValue) => {
    setInputValue({
      ...inputValue,
      CRValue: newValue,
    });
  };

  const handleCRTextFieldChange = (event) => {
    setInputValue({
      ...inputValue,
      CRValue: Number(event.target.value >= 0.5 ? event.target.value : 0.5),
    });
  };

  const handleLCSliderChange = (event, newValue) => {
    setInputValue({
      ...inputValue,
      LCValue: newValue,
    });
  };

  const handleLCTextFieldChange = (event) => {
    setInputValue({
      ...inputValue,
      LCValue: Number(event.target.value >= 0.5 ? event.target.value : 0.5),
    });
  };

  const formatWithCommas = (num) => {
    return new Intl.NumberFormat("en-IN").format(num);
  };

  const validateInputs = () => {
    const { CPMValue, CTRValue, CRValue, LCValue, number: leads } = inputValue;

    if (
      CPMValue < 50 ||
      CPMValue > 1500 ||
      CTRValue < 0.5 ||
      CTRValue > 5 ||
      CRValue < 0.5 ||
      CRValue > 100 ||
      LCValue < 0.5 ||
      LCValue > 100 ||
      leads <= 0
    ) {
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateInputs()) {
      alert("Please enter correct values for all fields.");
    } else {
      handleClickOpen();
      // Proceed with form submission
      // console.log("Form submitted with values:", inputValue);
    }
  };

  const updateShowResults = (state) => {
    setShowResults(state);
  };

  const getFieldText = (type) => {
    switch (type) {
      case "leads":
        return "Enter the number of leads you want to generate";
      case "sales":
        return "Enter the number of sales you want to generate";
      case "instant forms":
        return "Enter the number of leads you want to generate";
      default:
        return;
    }
  };

  const getTitleText = (type) => {
    switch (type) {
      case "leads":
        return "Lead Generation for Landing Page";
      case "sales":
        return "Sales Generation for Landing Page";
      case "instant forms":
        return "Lead Generation for Instant Forms";
      default:
        return;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
      className={styles.container}
    >
      <Card sx={{ maxWidth: "70vw" }} className={styles.card}>
        <CardContent sx={{ padding: "3rem" }} className={styles.cardContent}>
          <Typography
            sx={{ fontSize: "2rem", fontWeight: "500", textAlign: "center" }}
            className={styles.typography}
          >
            {getTitleText(type)}
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              marginTop: "2rem",
            }}
            className={styles.flexColumn}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 8,
                alignItems: "center",
              }}
              className={styles.firstFieldContainer}
            >
              <Typography>{getFieldText(type)}</Typography>
              <TextField
                id="outlined-basic"
                placeholder="1000"
                variant="outlined"
                size="small"
                value={inputValue.number}
                onChange={handleLeadsTextFieldChange}
                fullWidth={isSmallScreen}
              />
            </div>
            <div>
              <Typography>Cost per 1,000 Impressions (CPM)</Typography>
              <div
                style={{ display: "flex", flexDirection: "row", gap: 24 }}
                className={styles.sliderContainer}
              >
                <Slider
                  value={inputValue.CPMValue}
                  step={5}
                  max={1500}
                  min={50}
                  valueLabelDisplay="auto"
                  marks={CPMMarks}
                  onChange={handleCPMSliderChange}
                  sx={{ width: 350 }}
                  className={styles.slider}
                />
                <TextField
                  id="outlined-basic"
                  label="in Rupees(₹)"
                  value={inputValue.CPMValue}
                  onChange={handleCPMTextFieldChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">₹</InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <div>
              <Typography>Click-Through Rate (CTR)</Typography>
              <div
                style={{ display: "flex", flexDirection: "row", gap: 24 }}
                className={styles.sliderContainer}
              >
                <Slider
                  value={inputValue.CTRValue}
                  step={0.1}
                  max={5}
                  min={0.5}
                  valueLabelDisplay="auto"
                  marks={CTRMarks}
                  onChange={handleCTRSliderChange}
                  sx={{ width: 350 }}
                  className={styles.slider}
                />
                <TextField
                  id="outlined-basic"
                  value={inputValue.CTRValue >= 0.5 ? inputValue.CTRValue : 0.5}
                  onChange={handleCTRTextFieldChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <div>
              <Typography>
                {type === "instant forms"
                  ? "Conversion rate in % (CR)"
                  : "Conversion Rate on Landing Page %"}
              </Typography>
              <div
                style={{ display: "flex", flexDirection: "row", gap: 24 }}
                className={styles.sliderContainer}
              >
                <Slider
                  value={inputValue.CRValue}
                  step={0.5}
                  max={100}
                  min={0.5}
                  valueLabelDisplay="auto"
                  marks={CRMarks}
                  onChange={handleCRSliderChange}
                  sx={{ width: 350 }}
                  className={styles.slider}
                />
                <TextField
                  id="outlined-basic"
                  onChange={handleCRTextFieldChange}
                  value={inputValue.CRValue >= 0.5 ? inputValue.CRValue : 0.5}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <div
              hidden={type === "instant forms"}
              style={{ display: type === "instant forms" ? "none" : null }}
            >
              <Typography>Link Click to Landing Page %</Typography>
              <div
                style={{ display: "flex", flexDirection: "row", gap: 24 }}
                className={styles.sliderContainer}
              >
                <Slider
                  value={inputValue.LCValue}
                  onChange={handleLCSliderChange}
                  step={0.5}
                  max={100}
                  min={0.5}
                  valueLabelDisplay="auto"
                  marks={LCMarks}
                  sx={{ width: 350 }}
                  className={styles.slider}
                />
                <TextField
                  id="outlined-basic"
                  onChange={handleLCTextFieldChange}
                  value={inputValue.LCValue >= 0.5 ? inputValue.LCValue : 0.5}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <div
              style={{
                display: showResults ? "flex" : "none",
                flexDirection: "column",
                gap: "2rem",
                marginTop: "2rem",
              }}
            >
              <div
                className={styles.results}
                style={{ display: "flex", flexDirection: "row", gap: 10 }}
              >
                <Typography variant="h5" className={styles.resultText}>
                  Ideal total budget for your campaign is
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#ec4b46" }}
                  className={styles.resultText}
                >
                  {`₹ ${formatWithCommas(totalBudgetRequired)}`}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                }}
                className={styles.results}
              >
                <Typography variant="h5" className={styles.resultText}>
                  Projected cost per lead
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#ec4b46" }}
                  className={styles.resultText}
                >
                  {`₹ ${formatWithCommas(costPerLead)}`}
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
        <CardActions
          sx={{
            display: !showResults ? "flex" : "none",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
          className={styles.cardActions}
        >
          <StyledButton onClick={handleSubmit}>SUBMIT</StyledButton>
        </CardActions>
      </Card>
      <UserInformationDialogueBox
        open={open}
        handleClose={handleClose}
        updateShowResults={updateShowResults}
      />
    </div>
  );
};

export default LandingPage;

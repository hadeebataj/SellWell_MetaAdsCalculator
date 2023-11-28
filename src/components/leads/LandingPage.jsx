import React, { useState } from "react";
import {
  CardContent,
  Typography,
  Card,
  TextField,
  Slider,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import { StyledButton } from "../StyledButton";

const LandingPage = () => {
const [inputValue, setInputValue] = useState({
    leads: 1000,
    CPMValue: 150,
    CTRValue: 1,
    CRValue: 20,
    LCValue: 80
})


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
    setInputValue({
        ...inputValue,
        leads: Number(event.target.value)
    })
  }

  const handleCPMSliderChange = (event, newValue) => {
    setInputValue({
        ...inputValue,
        CPMValue: newValue,
    })
  }

  const handleCPMTextFieldChange = (event) => {
    setInputValue({
        ...inputValue,
        CPMValue: Number(event.target.value) //check for range condition
    })
  }

  const handleCTRSliderChange = (event, newValue) => {
    setInputValue({
        ...inputValue,
        CTRValue: newValue,
    })
  }

  const handleCTRTextFieldChange = (event) => {
    setInputValue({
        ...inputValue,
        CTRValue: Number(event.target.value) //check for range condition
    })
  }

  const handleCRSliderChange = (event, newValue) => {
    setInputValue({
        ...inputValue,
        CRValue: newValue,
    })
  }

  const handleCRTextFieldChange = (event) => {
    setInputValue({
        ...inputValue,
        CRValue: Number(event.target.value) //check for range condition
    })
  }

  const handleLCSliderChange = (event, newValue) => {
    setInputValue({
        ...inputValue,
        LCValue: newValue,
    })
  }

  const handleLCTextFieldChange = (event) => {
    setInputValue({
        ...inputValue,
        LCValue: Number(event.target.value) //check for range condition
    })
  }

  const validateInputs = () => {
    const { CPMValue, CTRValue, CRValue, LCValue, leads } = inputValue;
 
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
       // Show error message
     alert("Please enter correct values for all fields.");
    } else {
      // Proceed with form submission
      console.log("Form submitted with values:", inputValue);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "6rem",
        marginBottom: '6rem'
      }}
    >
      <Card sx={{ maxWidth: "70vw" }}>
        <CardContent sx={{ padding: "3rem" }}>
          <Typography
            sx={{ fontSize: "2rem", fontWeight: "500", textAlign: "center" }}
          >
            Lead Generation for Landing Page
          </Typography>
          <div style={{ display: "flex", flexDirection: "column", gap: 28, marginTop: '2rem' }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: 8,
                alignItems: "center",
              }}
            >
              <Typography>Leads you trying to generate</Typography>
              <TextField
                id="outlined-basic"
                placeholder="1000"
                variant="outlined"
                size="small"
                value={inputValue.leads}
                onChange={handleLeadsTextFieldChange}
              />
            </div>
            <div>
              <Typography>Cost per 1,000 Impressions (CPM)</Typography>
              <div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
                <Slider
                  value={inputValue.CPMValue}
                  step={5}
                  max={1500}
                  min={50}
                  valueLabelDisplay="auto"
                  marks={CPMMarks}
                  onChange={handleCPMSliderChange}
                  sx={{ width: 350 }}
                />
                <TextField
                  id="outlined-basic"
                  label='in Rupees(₹)'
                  value={inputValue.CPMValue}
                  onChange={handleCPMTextFieldChange}
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
            <div>
              <Typography>Click-Through Rate (CTR)</Typography>
              <div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
                <Slider
                  value={inputValue.CTRValue}
                  step={0.1}
                  max={5}
                  min={0.5}
                  valueLabelDisplay="auto"
                  marks={CTRMarks}
                  onChange={handleCTRSliderChange}
                  sx={{ width: 350 }}
                />
                <TextField
                  id="outlined-basic"
                  value={inputValue.CTRValue}
                  onChange={handleCTRTextFieldChange}
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
            <div>
              <Typography>Conversion Rate on Landing Page %</Typography>
              <div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
                <Slider
                  value={inputValue.CRValue}
                  step={0.5}
                  max={100}
                  min={0.5}
                  valueLabelDisplay="auto"
                  marks={CRMarks}
                  onChange={handleCRSliderChange}
                  sx={{ width: 350 }}
                />
                <TextField
                  id="outlined-basic"
                  onChange={handleCRTextFieldChange}
                  value={inputValue.CRValue}
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
            <div>
              <Typography>Link Click to Landing Page %</Typography>
              <div style={{ display: "flex", flexDirection: "row", gap: 24 }}>
                <Slider
                  value={inputValue.LCValue}
                  onChange={handleLCSliderChange}
                  step={0.5}
                  max={100}
                  min={0.5}
                  valueLabelDisplay="auto"
                  marks={LCMarks}
                  sx={{ width: 350 }}
                />
                <TextField
                  id="outlined-basic"
                  onChange={handleLCTextFieldChange}
                  value={inputValue.LCValue}
                  variant="outlined"
                  size="small"
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardActions sx={{display: "flex", justifyContent: 'center', marginBottom: '2rem'}}>
            <StyledButton onClick={handleSubmit}>SUBMIT</StyledButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default LandingPage;

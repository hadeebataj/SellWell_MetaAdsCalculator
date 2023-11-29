import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/leads/landingpage"
          element={<LandingPage type={"leads"} />}
        />
        <Route
          path="/leads/instantforms"
          element={<LandingPage type={"instant forms"} />}
        />
        <Route path="/sales" element={<LandingPage type={"sales"} />} />
      </Routes>
    </Router>
  );
};

export default App;

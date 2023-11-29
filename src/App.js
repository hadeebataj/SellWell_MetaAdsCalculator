import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import LandingPage from "./components/leads/LandingPage";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //     <Route path="/leads/landingpage" element={<LandingPage />} />
    //     {/* <Route path="/leads/instantforms" element={InstantForms} /> */}
    //   </Routes>
    // </Router>
    <>
      <MainPage />
    </>
  );
};

export default App;

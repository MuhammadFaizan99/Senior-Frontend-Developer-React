import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";
import DetailPage from "./component/DetailPage/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/listing/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;

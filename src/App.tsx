import React from "react";
import HomePage from "./components/Home/HomeBackground";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./components/Home/homeMain";
import Chosen from "./components/ChosenStrip/chosen";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/chose/:id" element={<Chosen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

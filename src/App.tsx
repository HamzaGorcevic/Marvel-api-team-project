import React from "react";
import HomePage from "./components/Home/HomeBackground";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./components/Home/homeMain";
import SeriesPage from "./components/Series/seriesIndex";
import NavbarPage from "./components/Layout/navbar";
import ContextFunction from "./components/context";
import ApiForGenre from "./components/Series/apiForGenre";
import Chosen from "./components/Home/ChosenStrip/chosen";
function App() {
  return (
    <BrowserRouter>
      <ContextFunction>
        <HomePage />
        <NavbarPage />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/chose/:id" element={<Chosen />} />
          <Route path="series" element={<ApiForGenre />} />
        </Routes>
      </ContextFunction>
    </BrowserRouter>
  );
}

export default App;

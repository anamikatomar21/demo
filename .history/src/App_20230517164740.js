import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages"
import "./App.css";

import Services from "./pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

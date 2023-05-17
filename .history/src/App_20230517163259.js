import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Home}>
          <Route path="/services" element={Services}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

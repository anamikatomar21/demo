import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path="/" >

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

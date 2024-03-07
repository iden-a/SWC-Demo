import "./App.css";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Form from "./components/Form/Form.jsx";
import Data from "./components/Data/Data";



function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

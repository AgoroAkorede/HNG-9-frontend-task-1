import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/home/home";

import Contact from "./components/contact/contact";
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

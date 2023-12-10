import React from "react";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/contact/Login";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AppAppBar from "./components/AppAppBar";
import Home from "./components/Home";
function App({ Component, pageProps }) {
  return (
    <div>
      <AppAppBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
export default App;

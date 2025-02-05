import React from "react";
import { Route, Routes } from "react-router-dom";
import AppAppBar from "./components/AppAppBar";
import Home from "./components/Home";
function App({ Component, pageProps }) {
  return (
    <div>
      <AppAppBar />
      <Routes>
        <Route path="/homepage" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
export default App;

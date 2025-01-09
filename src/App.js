import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import AppAppBar from "./components/AppAppBar";
import Home from "./components/Home";
function App({ Component, pageProps }) {
  return (
    <div>
      <AppAppBar />
      <HashRouter basename="/homepage">
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;

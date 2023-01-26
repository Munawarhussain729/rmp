import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainDiscover from "./components/MainDiscover";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="flex-1 flex flex-col ">
        <Routes>
          <Route exact path="/" element={<MainDiscover />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

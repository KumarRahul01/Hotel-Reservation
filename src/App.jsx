// import "./App.css";
import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Hotel from "./pages/Hotel";
import Error from "./pages/Error";

function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

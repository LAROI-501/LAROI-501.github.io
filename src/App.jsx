import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Eatwhat from "./pages/Eatwhat";
import Foodie from "./pages/Foodie";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eatwhat" element={<Eatwhat />} />
        <Route path="/foodie" element={<Foodie />} />
      </Routes>
    </>
  );
}

export default App;

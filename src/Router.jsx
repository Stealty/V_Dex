import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Pokedex from "./pages/pokedex";
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/pokedex/bulbasaur" element={<Pokemon />} />
    </Routes>
  );
};

export default Router;

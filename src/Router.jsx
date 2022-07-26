import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Pokedex from "./pages/pokedex";
import { HomeScreen } from "@templates";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} replace />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
  );
};

export default Router;

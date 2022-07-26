import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "./pages/home";
import Pokedex from "./pages/pokedex";

const Router = () => {
    return <Routes>
        <Route path="/" element={<Navigate to={"/home"} />}/>
        <Route path="/home" element={<App />} />
        <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
}

export default Router;
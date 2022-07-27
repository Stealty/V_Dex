import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Pokedex from "./pages/pokedex";
import Home from "./pages/home";
import Pokemon from "./pages/pokemon";
import NoFoundPage from "./pages/nofoundpage";
import { setPokemonSlice } from "@store/modules/pokemonSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetPokemonQuery } from "@api";

const Router = () => {
  const { data, isLoading, error } = useGetPokemonQuery(151);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      !isLoading && dispatch(setPokemonSlice(data.results));
    } catch (error) {
      console.log(error);
    }
  }, [isLoading]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="pokedex/:Pokeid" element={<Pokemon />} />
      <Route path="pokedex/bulbasaur" element={<Pokemon />} />
      <Route path="*" element={<NoFoundPage />} />
    </Routes>
  );
};

export default Router;

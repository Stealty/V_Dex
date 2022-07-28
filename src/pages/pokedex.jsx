import React, { useCallback } from "react";
import { PokedexScreen } from "@templates";
import { setPokemonSlice } from "@store/modules/pokemonSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonQuery } from "@api";

function Pokedex() {
  const { data, isLoading, error } = useGetPokemonQuery(40);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon);
  useEffect(() => {
    if (data?.results) {
      dispatch(setPokemonSlice(data.results));
      setFilteredPokemons(data.results);
    } else return;
  }, [isLoading]);

  return <>
    <PokedexScreen />
  </>
}

export default Pokedex;
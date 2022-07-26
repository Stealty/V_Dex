import React from "react";
import { PokedexScreen } from "@templates";
import { MenuHamburguer } from "@molecules";
import { setPokemonSlice } from "@store/modules/pokemonSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonQuery } from "@api";

function Pokedex() {
  const { data, isLoading, error } = useGetPokemonQuery(151);
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
    <MenuHamburguer></MenuHamburguer>
    <PokedexScreen />
    </>
}

export default Pokedex;
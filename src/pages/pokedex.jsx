import { useState } from "react";
import { PokedexScreen } from "@templates";
import { setGenerationFilterSlice, setPokemonSpeciesSlice } from "@store/modules/pokemonSlice";
import { useEffect } from "react";
import {  useSelector } from "react-redux";

function Pokedex() {
  const [data, setData] = useState([]);
  const dataStore = useSelector((state) => state.pokemon.pokemons);
  
  useEffect(() => {
    if (data) {
      return setData(dataStore);
    } else {
      return;
    }
  }, [dataStore]);


  return (
    <>
      <PokedexScreen />
    </>
  );
}

export default Pokedex;

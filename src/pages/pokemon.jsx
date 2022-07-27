import { PokemonDetails } from "@organisms";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Pokemon() {
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const pokemons = useSelector((state) => state.pokemon.pokemons);

  useEffect(() => {
    setFilteredPokemons(pokemons);
  }, [pokemons]);

  return <PokemonDetails />;
}

import { PokemonDetails } from "@organisms";
import { useSelector } from "react-redux";

export default function Pokemon() {
  const pokemon = useSelector((state) => state.pokemon.pokemons[0]);

  return <PokemonDetails url={pokemon?.url} />;
}

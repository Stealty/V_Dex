import { PokemonDetails } from "@organisms";
import { useSelector } from "react-redux";

export default function Pokemon() {
  const pokemon = useSelector((state) => state.pokemon.pokemons[0]);
  console.log(pokemon?.url);

  return <PokemonDetails url={pokemon?.url} />;
}

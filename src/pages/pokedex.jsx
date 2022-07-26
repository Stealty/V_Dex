import { PokedexScreen } from "@templates";
import { setPokemonSpeciesSlice } from "@store/modules/pokemonSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetPokemonQuery } from "@api";

function Pokedex() {
  const { data, isLoading, error } = useGetPokemonQuery(898);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      dispatch(setPokemonSpeciesSlice(data.results));
    }
  }, [isLoading]);

  return !isLoading && <PokedexScreen data={data.results} />;
}

export default Pokedex;

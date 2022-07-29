import { PokemonDetails } from "@organisms";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonSpeciesSlice } from "../store/modules/pokemonSlice";
import { useEffect } from "react";
import { useGetPokemonDetailsQuery, useGetPokemonSpeciesQuery } from "@api";
import { setPokemonDetailsSlice } from "@store/modules/pokemonSlice";

export default function Pokemon() {
  const name = location.pathname.split("/")[2];
  const pokemon = useSelector((state) => state.pokemon.pokemons[0]);
  const { data, isLoading, error } = useGetPokemonDetailsQuery(name);
  const { data1, isLoading1, error1 } = useGetPokemonSpeciesQuery(name);

  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.results) {
      dispatch(setPokemonDetailsSlice(data.results));
      dispatch(setPokemonSpeciesSlice(data1));
    } else return;
  }, [isLoading]);

  return <PokemonDetails data={data} isLoading={isLoading} error={error} />;
}

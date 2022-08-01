import React, { useCallback } from "react";
import { PokedexScreen } from "@templates";
import { setGenerationFilterSlice } from "@store/modules/pokemonSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetPokemonQuery } from "@api";

function Pokedex() {
  const { data, isLoading, error } = useGetPokemonQuery(151);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      dispatch(setGenerationFilterSlice(data.results));
    }
  }, [isLoading]);

  return <>
    <PokedexScreen  />
  </>
}

export default Pokedex;

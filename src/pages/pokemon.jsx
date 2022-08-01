import { PokemonDetails } from "@organisms";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonDetailsQuery } from "@api";
import { setPokemonDetailsSlice } from "@store/modules/pokemonSlice";
import { DetailsBackground } from "@molecules";

export default function Pokemon() {
  const name = useParams();
  const { data, isLoading, error } = useGetPokemonDetailsQuery(name.Pokeid);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      !isLoading && dispatch(setPokemonDetailsSlice(data));
    } catch (error) {
      console.log(error);
    }
  }, [isLoading]);

  return (
    <>
      <DetailsBackground />
      <PokemonDetails
        details={data}
        isLoading={isLoading}
        failed={error}
        name={name}
      />
    </>
  );
}

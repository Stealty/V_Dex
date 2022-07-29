import { PokemonDetails} from "@organisms";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useGetPokemonDetailsQuery } from "@api";
import { setPokemonDetailsSlice } from "@store/modules/pokemonSlice";

export default function Pokemon() {
  const name = location.pathname.split("/")[2].toLocaleLowerCase();
  const { data, isLoading, error } = useGetPokemonDetailsQuery(name);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      !isLoading && dispatch(setPokemonDetailsSlice(data));
    } catch (error) {
      console.log(error);
    }
  }, [isLoading]);

  return (
    <PokemonDetails
      details={data}
      isLoading={isLoading}
      failed={error}
      name={name}
    />
  );
}

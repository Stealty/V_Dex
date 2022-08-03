import { PokemonDetails } from "@organisms";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonDetailsQuery } from "@api";
import { setPokemonDetailsSlice } from "@store/modules/pokemonSlice";
import { LoadingAnimation } from "@atoms";

export default function Pokemon() {
  const name = useParams();
  const { data, isLoading, error } = useGetPokemonDetailsQuery(name?.Pokeid);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      !isLoading && dispatch(setPokemonDetailsSlice(data));
      setTimeout(() => setLoading(false), 500);
    } catch (error) {
      console.log(error);
    }
  }, [isLoading]);

  return loading ? <LoadingAnimation /> : <PokemonDetails details={data} />;
}

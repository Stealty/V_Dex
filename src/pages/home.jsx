import { HomeScreen } from "@/templates";
import { setPokemonSlice } from "@store/modules/pokemonSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonQuery } from "@api";

function Home() {
  const { data, isLoading, error } = useGetPokemonQuery(151);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon);
  console.log(data);
  useEffect(() => {
    if (data?.results) {
      dispatch(setPokemonSlice(data.results));
      setFilteredPokemons(data.results);
    } else return;
  }, [isLoading]);

  return (
    <main>
      <HomeScreen />
    </main>
  );
}

export default Home;

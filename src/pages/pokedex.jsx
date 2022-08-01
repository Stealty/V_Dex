import { useState } from "react";
import { PokedexScreen } from "@templates";
import { setGenerationFilterSlice } from "@store/modules/pokemonSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Pokedex() {
  const [data, setData] = useState([]);
  const dataStore = useSelector((state) => state.pokemon.pokemons);
  useEffect(() => {
    if (data) {
      return setData(dataStore);
    } else {
      return;
    }
  }, [dataStore]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setGenerationFilterSlice(data));
    }
  }, [data]);

  return (
    <>
      <PokedexScreen />
    </>
  );
}

export default Pokedex;

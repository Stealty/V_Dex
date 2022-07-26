import { useGetPokemonEvolutionQuery } from "@api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPokemonEvolutionSlice } from "@store/modules/pokemonSlice";
import { Paragraph } from "@atoms";
import { EvolutionList } from "@molecules";
import styles from "./Evolutions.module.scss";

const Evolutions = ({ species }) => {
  const { data, isLoading, error } = useGetPokemonEvolutionQuery(
    species?.evolution_chain?.url
  );

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      !isLoading && dispatch(setPokemonEvolutionSlice(data));
    } catch (error) {
      console.log(error);
    }
  });

  if (!isLoading) {
    return (
      <div className={styles.EvolutionTab}>
        <Paragraph title="Evolution Chain" />
        <EvolutionList pokemon={data} />
      </div>
    );
  }
};

export default Evolutions;

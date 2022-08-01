import { useGetPokemonEvolutionQuery, useGetPokemonDetailsQuery } from "@api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonEvolutionSlice } from "@store/modules/pokemonSlice";
import { Paragraph } from "@atoms";
import { PokemonEvolution } from "@molecules";
import styles from "./EvolutionList.module.scss";

const EvolutionList = ({ species }) => {
  const { data, isLoading, error } = useGetPokemonEvolutionQuery(
    species.evolution_chain.url
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
    const pokemonstarter = data.chain.species.name;
    const pokemonEv1 = data.chain.evolves_to[0].species.name;
    const pokemonEv2 = data.chain.evolves_to[0].evolves_to[0].species.name;

    return (
      <div className={styles.EvolutionTab}>
        <Paragraph title="Evolution Chain" />
        <div className={styles.Evolution}>
          <div className={styles.Evolution__EvolutionStatus}>
            <PokemonEvolution pokemon={pokemonstarter} />
            <div className={styles.Evolution__Trigger}>
              <svg width="22" height="12" viewBox="0 0 22 12">
                <path d="M0.95237 4.8724H18.7487L14.5022 1.62567C14.1302 1.25388 14.1302 0.650754 14.5022 0.279012C14.8742 -0.0930041 15.4773 -0.0930041 15.8488 0.279012L21.721 5.1513C22.093 5.5231 22.093 6.12628 21.721 6.49797L15.8488 11.3705C15.6629 11.5566 15.4192 11.6495 15.1755 11.6495C14.9319 11.6495 14.6882 11.5566 14.5022 11.3705C14.1302 10.9987 14.1302 10.3956 14.5022 10.0239L18.7487 6.77698H0.95237C0.426464 6.77698 0 6.35057 0 5.82466C0 5.29876 0.426411 4.8724 0.95237 4.8724Z" />
              </svg>
              <Paragraph
                title={
                  data.chain.evolves_to[0].evolution_details[0].trigger.name +
                  " " +
                  data.chain.evolves_to[0].evolution_details[0].min_level
                }
                size="16"
              ></Paragraph>
            </div>
            <PokemonEvolution pokemon={pokemonEv1} />
          </div>
          <svg width="320" height="1" viewBox="0 0 320 1">
            <line y1="0.5" x2="320" y2="0.5" stroke="#F4F5F4" />
          </svg>

          <div className={styles.Evolution__EvolutionStatus}>
            <PokemonEvolution pokemon={pokemonEv1} />
            <div className={styles.Evolution__Trigger}>
              <svg width="22" height="12" viewBox="0 0 22 12">
                <path d="M0.95237 4.8724H18.7487L14.5022 1.62567C14.1302 1.25388 14.1302 0.650754 14.5022 0.279012C14.8742 -0.0930041 15.4773 -0.0930041 15.8488 0.279012L21.721 5.1513C22.093 5.5231 22.093 6.12628 21.721 6.49797L15.8488 11.3705C15.6629 11.5566 15.4192 11.6495 15.1755 11.6495C14.9319 11.6495 14.6882 11.5566 14.5022 11.3705C14.1302 10.9987 14.1302 10.3956 14.5022 10.0239L18.7487 6.77698H0.95237C0.426464 6.77698 0 6.35057 0 5.82466C0 5.29876 0.426411 4.8724 0.95237 4.8724Z" />
              </svg>
              <Paragraph
                title={
                  data.chain.evolves_to[0].evolves_to[0].evolution_details[0]
                    .trigger.name +
                  " " +
                  data.chain.evolves_to[0].evolves_to[0].evolution_details[0]
                    .min_level
                }
                size="16"
              ></Paragraph>
            </div>
            <PokemonEvolution pokemon={pokemonEv2} />
          </div>
        </div>
      </div>
    );
  }
};

export default EvolutionList;

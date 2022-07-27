import { PokemonCard, Modal, Filter } from "@molecules";
import { Paragraph } from "@atoms";
import styles from "./PokedexScreen.module.scss";
import { useGetPokemonQuery } from "@api";
import { useState } from "react";

const PokedexScreen = () => {
  const { data, isLoading, error } = useGetPokemonQuery(30);
  const [isActive, setActive] = useState(false);

  const onClickHandler = () => {
    setActive(!isActive);
  };

  if (!isLoading) {
    return (
      <div className={styles.PokedexScreen}>
        <div className={styles.PokemonList}>
          {data.results.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>
          ))}
        </div>
        <Modal Active={isActive}></Modal>
        <Filter onClick={onClickHandler} Active={isActive}></Filter>
      </div>
    );
  } else {
    return <Paragraph title="No Pokémon Found"></Paragraph>;
  }
};

export default PokedexScreen;

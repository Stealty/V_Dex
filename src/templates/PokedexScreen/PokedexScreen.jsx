import { PokemonCard, Modal, Filter, MenuHamburguer } from "@molecules";
import { Backdrop, SearchBar } from "@atoms";
import styles from "./PokedexScreen.module.scss";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const PokedexScreen = () => {
  const pokemon = useSelector((state) =>
    state.pokemon.pokemonSpecies.slice(0, 40)
  );
  const [isActive, setActive] = useState(false);
  const [openSearch, setopenSearch] = useState(false);
  const searchText = useRef();

  const onClickHandler = () => {
    setActive(!isActive);
  };

  const Search = () => {
    setopenSearch(!openSearch);
  };

  const onFilter = () => {
    console.log(searchText.current.value);
  };

  return (
    <div
      className={
        !isActive
          ? styles.PokedexScreen
          : styles.PokedexScreen + " " + styles["--active"]
      }
    >
      <MenuHamburguer></MenuHamburguer>
      <div className={styles.PokemonList}>
        {pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <Filter onClick={onClickHandler} Active={isActive}></Filter>
      <Backdrop Active={isActive}>
        <Modal onClick={Search} Active={isActive} />
        {openSearch == true && (
          <div className={styles.PokedexScreen__Search}>
            <SearchBar
              onChange={onFilter}
              search={searchText}
              className={styles.PokedexScreen__SearchBar}
              type="text"
              placeholder="Search Pokemon"
            />
          </div>
        )}
      </Backdrop>
    </div>
  );
};

export default PokedexScreen;

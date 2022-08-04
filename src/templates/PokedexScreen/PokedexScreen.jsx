import { PokemonCard, Modal, Filter, MenuHamburguer } from "@molecules";
import { Backdrop, SearchBar } from "@atoms";
import styles from "./PokedexScreen.module.scss";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const PokedexScreen = ({ data }) => {
  const [isLoading, setLoading] = useState(false);
  const [pokemon, SetPokemons] = useState(data.slice(0, 40));
  const [isActive, setActive] = useState(false);
  const [openSearch, setopenSearch] = useState(false);
  const searchText = useRef();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      SetPokemons(
        data.filter((pokemon) =>
          pokemon.name.toString().toLowerCase().includes(state)
        )
      );
    } else return;
  }, [state]);

  const onClickHandler = () => {
    setActive(!isActive);
  };

  const Search = () => {
    setopenSearch(!openSearch);
  };

  const onFilter = () => {
    setLoading(true);
    setInterval(() => {
      SetPokemons(
        data.filter((pokemon) =>
          pokemon.name
            .toString()
            .toLowerCase()
            .includes(searchText.current.value.toString().toLowerCase())
        )
      );
      setLoading(false);
      if (searchText.current.value.trim() == "") {
        SetPokemons(AllPokemon.slice(0, 40));
      }
    }, 5000);
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
        {!isLoading &&
          pokemon.map((pokemon) => (
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

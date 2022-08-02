import { PokemonCard, Modal, Filter, MenuHamburguer } from "@molecules";
import { Backdrop, SearchBar } from "@atoms";
import styles from "./PokedexScreen.module.scss";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const PokedexScreen = ({data}) => {
  const AllPokemon = useSelector((state) =>
    state.pokemon.pokemonSpecies.slice()
  );
  const [isLoading, setLoading] = useState(false);
  const [pokemon, SetPokemons] = useState(data.slice(0, 40));
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
    setLoading(true);
    setInterval(() => {
      SetPokemons(AllPokemon.filter((pokemon) => pokemon.name.toString().toLowerCase().includes(searchText.current.value.toString().toLowerCase())));
      setLoading(false);
      if(searchText.current.value.trim() == ""){
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
        {!isLoading && pokemon.map((pokemon) => (
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

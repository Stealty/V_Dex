import styles from "./HomeScreen.module.scss";
import { Paragraph, SearchBar } from "@atoms";
import { CategoriesCard } from "@molecules";
import { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { NewsCard } from "../../components/molecules";

export default function HomeScreen() {
  const searchRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    searchRef.current.focus();
    searchRef.current.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        navigate("/pokedex", {
          state: searchRef.current.value.trim().toLowerCase(),
        });
      }
    });
  }, [window.onload]);

  return (
    <div className={styles.HomeScreen}>
      <Paragraph
        title="What Pokemon are you looking for?"
        color="dark-gray"
        size="30"
      />
      <SearchBar
        type="text"
        placeholder="Search Pokemon, Move, Ability etc"
        search={searchRef}
      />
      <section
        className={styles.HomeScreen__categories}
        aria-label="Categories"
      >
        <CategoriesCard color="green" title="Pokedex" route="pokedex" />
        <CategoriesCard color="red" title="Moves" route="moves" />
        <CategoriesCard color="blue" title="Abilities" route="abilities" />
        <CategoriesCard color="yellow" title="Items" route="items" />
        <CategoriesCard color="purple" title="Locations" route="locations" />
        <CategoriesCard color="brown" title="Type Charts" route="types" />
      </section>
      <section aria-label="Pokemon News" className={styles.PokemonNews}>
        <div className={styles.PokemonNews__heading}>
          <Paragraph title="Pokemon News" color="dark-gray" size="20" />
          <Link to="/news">View All</Link>
        </div>
        <ul className={styles.PokemonNews__list}>
          <li className={styles.PokemonNews__item}>
            <NewsCard
              title="Pokemon Rumble Rush Arrives Soon"
              data="15 May 2019"
              image="https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_rumble_rush/pokemon-rumble-rush-169.jpg"
            />
          </li>
          <li className={styles.PokemonNews__item}>
            <NewsCard
              title="Pokemon Rumble Rush Arrives Soon"
              data="15 May 2019"
              image="https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_rumble_rush/pokemon-rumble-rush-169.jpg"
            />
          </li>
          <li className={styles.PokemonNews__item}>
            <NewsCard
              title="Pokemon Rumble Rush Arrives Soon"
              data="15 May 2019"
              image="https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_rumble_rush/pokemon-rumble-rush-169.jpg"
            />
          </li>
        </ul>
      </section>
    </div>
  );
}

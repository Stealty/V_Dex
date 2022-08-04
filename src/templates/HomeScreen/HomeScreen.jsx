import styles from "./HomeScreen.module.scss";
import { Paragraph, SearchBar } from "@atoms";
import { CategoriesCard } from "@molecules";
import { useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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
    </div>
  );
}

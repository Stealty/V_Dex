import styles from "./HomeScreen.module.scss";
import { Title, SearchBar } from "@atoms";
import { CategoriesCard } from "@molecules";

export default function HomeScreen() {
  return (
    <div className={styles.HomeScreen}>
      <Title title="What Pokemon are you looking for?" className="left16" />
      <SearchBar type="text" placeholder="Search Pokemon, Move, Ability etc" />
      <CategoriesCard color="green" title="Pokedex" />
      <CategoriesCard color="red" title="Moves" />
    </div>
  );
}

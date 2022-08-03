import styles from "./HomeScreen.module.scss";
import { Paragraph, SearchBar } from "@atoms";
import { CategoriesCard } from "@molecules";

export default function HomeScreen() {
  return (
    <div className={styles.HomeScreen}>
      <Paragraph
        title="What Pokemon are you looking for?"
        color="dark-gray"
        size="30"
      />
      <SearchBar type="text" placeholder="Search Pokemon, Move, Ability etc" />
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

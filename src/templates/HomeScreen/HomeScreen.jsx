import styles from "./HomeScreen.module.scss";
import { Title, SearchBar } from "@atoms";

export default function HomeScreen() {
  return (
    <div className={styles.HomeScreen}>
      <Title title="What Pokemon are you looking for?" />
      <SearchBar type="text" placeholder="Search Pokemon, Move, Ability etc" />
    </div>
  );
}

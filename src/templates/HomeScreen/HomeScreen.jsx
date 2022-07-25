import styles from "./HomeScreen.module.scss";
import { Title } from "@atoms";

export default function HomeScreen() {
  return (
    <div className={styles.HomeScreen}>
      <Title title="What Pokemon are you looking for?" />
    </div>
  );
}

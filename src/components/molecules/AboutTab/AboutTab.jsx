import styles from "./AboutTab.module.scss";
import { Paragraph } from "@atoms";
import { PokemonSize } from "@molecules";

export default function AboutTab({ data, description }) {
  return (
    <div className={styles.AboutTab}>
      <Paragraph
        size="14"
        weight="light"
        height="24"
        color="dark-gray"
        title={description}
      />
      <div className={styles.AboutTab__sie}>
        <PokemonSize data={data} />
      </div>
    </div>
  );
}

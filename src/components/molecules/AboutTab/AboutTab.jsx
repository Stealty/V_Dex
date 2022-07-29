import styles from "./AboutTab.module.scss";
import { Paragraph } from "@atoms";
import { PokemonSize } from "@molecules";

export default function AboutTab({ data }) {
  return (
    <div className={styles.AboutTab}>
      <Paragraph
        size="14"
        weight="light"
        height="24"
        color="dark-gray"
        title="Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger. "
      />
      <div className={styles.AboutTab__sie}>
        <PokemonSize data={data} />
      </div>
    </div>
  );
}

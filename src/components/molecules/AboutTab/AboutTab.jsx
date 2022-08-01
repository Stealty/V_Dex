import styles from "./AboutTab.module.scss";
import { Paragraph } from "@atoms";
import { PokemonSize } from "@molecules";
import { Breeding } from "@molecules";

export default function AboutTab({ data, description, species }) {
  return (
    <div className={styles.AboutTab}>
      <Paragraph
        size="14"
        weight="light"
        height="24"
        color="dark-gray"
        title={description}
      />
      <PokemonSize data={data} />
      <Breeding data={species} date={data} />
    </div>
  );
}

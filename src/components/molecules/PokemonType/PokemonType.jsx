import { Paragraph } from "@atoms";
import styles from "./PokemonType.module.scss";

export default function PokemonType({ type }) {
  return (
    <span className={styles.PokemonType}>
      <Paragraph title={type} size="14" weight="light" />
    </span>
  );
}

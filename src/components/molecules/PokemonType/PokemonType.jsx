import { Paragraph } from "@atoms";
import styles from "./PokemonType.module.scss";

export default function PokemonType({ type, color }) {
  return (
    <span className={styles.PokemonType}>
      <Paragraph title={type} size="14" weight="light" color={color} />
    </span>
  );
}

import styles from "./PokemonType.module.scss";
import firstUppercase from "../../../utils/firstUppercase";

export default function PokemonType({ type }) {
  return <span className={styles.PokemonType}>{firstUppercase(type)}</span>;
}

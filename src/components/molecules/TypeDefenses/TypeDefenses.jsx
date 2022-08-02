import { Paragraph } from "../../atoms";
import styles from "./TypeDefenses.module.scss";
import { useSelector } from "react-redux/es/exports";

export default function TypeDefenses({ defenses }) {
  const data = useSelector((state) => state.pokemon);
  return (
    <div className={styles.TypeDefenses}>
      <Paragraph title="Type Defenses" size="16" weight="bold" />
      <Paragraph
        size="14"
        opacity="04"
        title={"The effectiveness of each type on " + data.pokemon.name}
      />
    </div>
  );
}

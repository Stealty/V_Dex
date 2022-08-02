import { Paragraph } from "../../atoms";
import styles from "./TypeDefenses.module.scss";

export default function TypeDefenses({ defenses }) {
  return (
    <div className={styles.TypeDefenses}>
      <Paragraph title="Type Defenses" size="36" />
    </div>
  );
}

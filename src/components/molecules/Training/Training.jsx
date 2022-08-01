import { Paragraph } from "../../atoms";
import styles from "./Training.module.scss";

export default function Training({ exp }) {
  return (
    <div className={styles.Training}>
      <Paragraph title="Training" size="16" />
      <div className={styles.Training__baseExp}>
        <Paragraph title="Base EXP" size="14" opacity="04" />
        <Paragraph title={exp} />
      </div>
    </div>
  );
}

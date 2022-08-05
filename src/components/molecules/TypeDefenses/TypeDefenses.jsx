import { Paragraph } from "../../atoms";
import styles from "./TypeDefenses.module.scss";

export default function TypeDefenses({ data }) {
  return (
    <div className={styles.TypeDefenses}>
      <Paragraph title="Type Defenses" size="16" weight="bold" />
      <div className={styles.TypeDefenses__container}>
        <Paragraph
          size="14"
          opacity="04"
          title={"The effectiveness of each type on "}
        />
        <Paragraph size="14" opacity="04" title={data?.name} />
      </div>
    </div>
  );
}

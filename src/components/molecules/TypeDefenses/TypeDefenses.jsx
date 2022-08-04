import { Paragraph } from "../../atoms";
import styles from "./TypeDefenses.module.scss";
import { useSelector } from "react-redux/es/exports";

export default function TypeDefenses() {
  const data = useSelector((state) => state.pokemon.pokemon);
  console.log(data);
  return (
    <div className={styles.TypeDefenses}>
      <Paragraph title="Type Defenses" size="16" weight="bold" />
      <div className={styles.TypeDefenses__container}>
        <Paragraph
          size="14"
          opacity="04"
          title={"The effectiveness of each type on "}
        />
        <Paragraph size="14" opacity="04" title={data.name} />
      </div>
    </div>
  );
}

import styles from "./Breeding.module.scss";
import { Paragraph } from "@atoms";
import { FemaleIcon, MaleIcon } from "../../atoms";

export default function Breeding({ data, date }) {
  const eggGroups = data?.egg_groups[0].name;
  const gender = data?.gender_rate;

  const femalePercent = gender * 12.5;
  const malePercent = 100 - femalePercent;

  return (
    <div className={styles.Breeding}>
      <Paragraph title="Breeding" size="16" />
      <div className={styles.Breeding__gender}>
        <Paragraph title="Gender" opacity="04" size="14" />
        {isNaN(gender) ? (
          <Paragraph title="Genderless" size="14" />
        ) : (
          <>
            <Paragraph
              size="14"
              icon={gender > 0 && <MaleIcon />}
              title={gender < 0 ? "Unknown" : malePercent + "%"}
            />
            <Paragraph
              size="14"
              icon={gender > 0 && <FemaleIcon />}
              title={gender < 0 ? null : femalePercent + "%"}
            />
          </>
        )}
      </div>
      <div className={styles.Breeding__eggGroups}>
        <Paragraph title="Egg Groups" opacity="04" size="14" />
        <Paragraph title={eggGroups + " "} size="14" />
      </div>
      <div className={styles.Breeding__eggCycle}>
        <Paragraph title="Egg Cycle" opacity="04" size="14" />
        <Paragraph size="14" title={date?.types[0].type.name} />
      </div>
    </div>
  );
}

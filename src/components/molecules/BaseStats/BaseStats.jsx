import styles from "./BaseStats.module.scss";
import { Paragraph } from "@atoms";
import statsConverter from "@utils/statsConverter.js";
import toPercent from "@utils/toPercent";

export default function BaseStats({ type, value, progress }) {
  const status = statsConverter(type);
  const percent = toPercent(progress ? progress : value);

  return (
    <div className={styles.BaseStats}>
      <Paragraph title={status} opacity="04" size="14" />
      <Paragraph title={value} size="14" />
      <span
        className={
          value * 1 < 50
            ? styles["BaseStats__progressBar--red"]
            : styles["BaseStats__progressBar--green"]
        }
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

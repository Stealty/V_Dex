import styles from "./BaseStats.module.scss";
import { Paragraph } from "@atoms";
import statsConverter from "@utils/statsConverter.js";
import toPercent from "@utils/toPercent";
import statsSum from "@utils/statsSum";
import { TypeDefenses } from "@molecules";

export default function BaseStats({ data }) {
  const sum = statsSum(data?.stats);
  return (
    <div className={styles.BaseStats}>
      {data?.stats.map((status) => {
        return (
          <div className={styles.BaseStats__items} key={status.stat.name}>
            <Paragraph
              title={statsConverter(status.stat.name)}
              opacity="04"
              size="14"
            />
            <Paragraph title={status.base_stat} size="14" />
            <span
              className={
                (status.base_stat < 50 &&
                  styles["BaseStats__progressBar--red"]) ||
                (status.base_stat <= 100 &&
                  styles["BaseStats__progressBar--green"]) ||
                (status.base_stat > 100 &&
                  styles["BaseStats__progressBar--purple"])
              }
              style={{ width: `${toPercent(status.base_stat)}%` }}
            />
          </div>
        );
      })}
      <div className={styles.BaseStats__total}>
        <Paragraph title="Total" opacity="04" size="14" />
        <Paragraph title={sum} size="14" />
        <span
          className={
            sum < 50
              ? styles["BaseStats__progressBar--red"]
              : styles["BaseStats__progressBar--green"]
          }
          style={{ width: `${toPercent(sum / 6)}%` }}
        />
      </div>
      <TypeDefenses data={data} />
    </div>
  );
}

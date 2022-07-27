import styles from "./DetailsBackground.module.scss";

export default function DetailsBackground() {
  return (
    <div className={styles.DetailsBackground}>
      <img
        src="/images/ornament.png"
        alt=""
        className={styles.DetailsBackground__ornament}
      />

      <img
        src="/images/dotted.png"
        alt=""
        className={styles.DetailsBackground__dotted}
      />

      <img
        src="/images/SubtractCenter.png"
        alt=""
        className={styles.DetailsBackground__subtract}
      />
    </div>
  );
}

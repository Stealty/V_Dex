import styles from "./Title.module.scss";

export default function Title({ title, color }) {
  return (
    <h1
      className={styles.Title + " " + color ? styles[`Title--${color}`] : null}
    >
      {title}
    </h1>
  );
}

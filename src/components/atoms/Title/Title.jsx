import styles from "./Title.module.scss";

export default function Title({ title, position, className }) {
  return <h1 className={styles.Title}>{title}</h1>;
}

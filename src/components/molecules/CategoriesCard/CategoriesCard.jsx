import styles from "./CategoriesCard.module.scss";

export default function CategoriesCard({ color, title }) {
  return (
    <div
      className={
        color
          ? styles.CategoriesCard + " " + styles[`CategoriesCard--${color}`]
          : styles.CategoriesCard
      }
    >
      <button type="button" className={styles.CategoriesCard__button}>
        {title}
      </button>
    </div>
  );
}

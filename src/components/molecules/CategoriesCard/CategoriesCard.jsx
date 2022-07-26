import { Link } from "react-router-dom";
import styles from "./CategoriesCard.module.scss";

export default function CategoriesCard({ color, title, route }) {
  return (
    <div
      className={
        color
          ? styles.CategoriesCard + " " + styles[`CategoriesCard--${color}`]
          : styles.CategoriesCard
      }
    >
      <Link
        type="button"
        className={styles.CategoriesCard__link}
        to={`/${route}`}
      >
        {title}
      </Link>
    </div>
  );
}

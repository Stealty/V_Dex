import { Link } from "react-router-dom";
import styles from "./CategoriesCard.module.scss";
import { Paragraph } from "@atoms";

export default function CategoriesCard({ color, title, route }) {
  return (
    <div
      className={
        color
          ? styles.CategoriesCard + " " + styles[`CategoriesCard--${color}`]
          : styles.CategoriesCard
      }
    >
      <img
        src="./images/SubtractCard.png"
        alt=""
        className={styles.CategoriesCard__image}
      />
      <Link
        type="button"
        className={styles.CategoriesCard__link}
        to={`/${route}`}
      >
        <Paragraph title={title} size="14" weight="light" />
      </Link>
    </div>
  );
}

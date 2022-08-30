import styles from "./NewsCard.module.scss";
import { Paragraph } from "@atoms";

export default function NewsCard({ title, data, image }) {
  return (
    <div className={styles.NewsCard}>
      <div className={styles.NewsCard__texts}>
        <Paragraph title={title} size="14" color="dark-gray" height="14" />
        <Paragraph
          title={data}
          size="10"
          color="dark-gray"
          opacity="04"
          weight="light"
        />
      </div>
      <img src={image} alt={title} className={styles.NewsCard__image} />
    </div>
  );
}

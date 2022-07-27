import styles from "./Paragraph.module.scss";

export default function Paragraph({ className, title, color, size, weight }) {
  return (
    <h1
<<<<<<< HEAD
      className={
        styles.Paragraph +
=======
      className={className != null ?
        className +
        " " +
        styles.Title
         :
        styles.Title +
>>>>>>> Pokedex
        " " +
        styles[`Paragraph--${color}`] +
        " " +
        styles[`Paragraph--size${size}`] +
        " " +
        styles[`Paragraph--${weight}`]
      }
    >
      {title}
    </h1>
  );
}

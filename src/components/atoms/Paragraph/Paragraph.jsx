import styles from "./Paragraph.module.scss";

export default function Paragraph({ title, color, size, weight }) {
  return (
    <h1
      className={
        styles.Paragraph +
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

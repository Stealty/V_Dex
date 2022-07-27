import styles from "./Paragraph.module.scss";

export default function Paragraph({ title, color, size, weight }) {
  return (
    <h1
      className={
        styles.Title +
        " " +
        styles[`Title--${color}`] +
        " " +
        styles[`Title--size${size}`] +
        " " +
        styles[`Title--${weight}`]
      }
    >
      {title}
    </h1>
  );
}
import styles from "./Paragraph.module.scss";

export default function Paragraph({ className, title, color, size, weight }) {
  return (
    <h1
      className={className != null ?
        className +
        " " +
        styles.Title
         :
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

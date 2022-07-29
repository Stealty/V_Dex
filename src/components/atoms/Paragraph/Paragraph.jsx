import styles from "./Paragraph.module.scss";

export default function Paragraph({
  className,
  title,
  color,
  size,
  weight,
  height,
  opacity,
}) {
  return (
    <h1
      className={
        className != null
          ? className + " " + styles.Paragraph
          : styles.Paragraph +
            " " +
            styles[`Paragraph--${color}`] +
            " " +
            styles[`Paragraph--size${size}`] +
            " " +
            styles[`Paragraph--${weight}`] +
            " " +
            styles[`Paragraph--height${height}`] +
            " " +
            styles[`Paragraph--opacity${opacity}`]
      }
    >
      {title}
    </h1>
  );
}

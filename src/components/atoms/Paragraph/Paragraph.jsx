import styles from "./Paragraph.module.scss";

export default function Paragraph({
  className,
  title,
  color,
  size,
  weight,
  height,
  opacity,
  icon,
}) {
  return (
    <p
      aria-label={title}
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
      {icon && icon}
      {icon && " "}
      {title}
    </p>
  );
}

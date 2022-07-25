import styles from "./SearchBar.module.scss";

export default function SearchBar({ className, placeholder, type }) {
  return (
    <input
      className={
        className ? { className } + styles.SearchBar : styles.SearchBar
      }
      type={type}
      placeholder={placeholder}
    />
  );
}

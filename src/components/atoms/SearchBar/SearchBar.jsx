import styles from "./SearchBar.module.scss";

export default function SearchBar({ search, onChange, className, placeholder, type }) {
  return (
    <input
      className={
        className ? `${className} ${styles.SearchBar}` : styles.SearchBar
      }
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      ref={search}
    />
  );
}

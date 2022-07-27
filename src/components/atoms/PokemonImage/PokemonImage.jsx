import styles from "./PokemonImage.module.scss";

export default function PokemonImage({ image, name }) {
  return <img src={image} alt={name} className={styles.PokemonImage} />;
}

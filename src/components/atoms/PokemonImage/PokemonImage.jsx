import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import styles from "./PokemonImage.module.scss";

export default function PokemonImage({ image, name }) {
  if (!image) {
    return (
      <div className={styles.PokemonImage}>
        <LoadingAnimation />
      </div>
    );
  } else return <img src={image} alt={name} className={styles.PokemonImage} />;
}
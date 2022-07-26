import styles from "./DetailsBackground.module.scss";

export default function DetailsBackground() {
  return (
    <div>
      <img
        src="/images/ornament.png"
        alt=""
        className={styles.PokemonDetails__ornament}
      />

      <img
        src="/images/dotted.png"
        alt=""
        className={styles.PokemonDetails__dotted}
      />

      <img
        src="/images/SubtractCenter.png"
        alt=""
        className={styles.PokemonDetails__subtract}
      />
    </div>
  );
}

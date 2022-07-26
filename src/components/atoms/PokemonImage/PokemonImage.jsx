import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import styles from "./PokemonImage.module.scss";
import { useEffect, useState } from "react";

export default function PokemonImage({
  className,
  isEvolution,
  image,
  evolution,
  name,
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, [window.onload]);
  if (!image) {
    return (
      <div className={styles.PokemonImage}>
        <LoadingAnimation />
      </div>
    );
  } else
    return (
      <img
        src={image}
        alt={"Pokemon" + name}
        className={
          isEvolution
            ? styles.PokemonImage
            : styles.PokemonImage + " " + styles["PokemonImage--evolution"]
        }
      />
    );
}

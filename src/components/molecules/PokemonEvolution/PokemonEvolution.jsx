import { useGetPokemonDetailsQuery } from "@api";
import { PokemonImage, LoadingAnimation } from "@atoms";
import { Link } from "react-router-dom";
import styles from "./PokemonEvolution.module.scss";

const PokemonEvolution = ({ pokemon }) => {
  const { data, isLoading, error } = useGetPokemonDetailsQuery(pokemon);

  if (!isLoading) {
    return (
      <div className={styles.Evolution}>
        <Link to={"/pokedex/" + data?.name}>
          <svg
            className={styles.Evolution__Pokeball}
            width="83"
            height="83"
            viewBox="0 0 83 83"
          >
            <path
              d="M82.7252 44.9016H61.2602C59.6432 54.4287 51.3501 61.6831 41.3626 61.6831C31.3751 61.6831 23.082
                54.4287 21.465 44.9016H0C1.73034 66.2303 19.5881 83 41.3626 83C63.1371 83 80.9949 66.2303 82.7252 44.9016ZM82.6859
                37.6448H61.1779C59.3786 28.3421 51.191 21.3169 41.3626 21.3169C31.5342 21.3169 23.3466 28.3421 21.5473
                37.6448H0.0392854C1.98408 16.5324 19.7427 0 41.3626 0C62.9825 0 80.7411 16.5324 82.6859 37.6448ZM28.5457 41.5C28.5457
                34.4214 34.284 28.6831 41.3626 28.6831C48.4412 28.6831 54.1795 34.4214 54.1795 41.5C54.1795 48.5786 48.4412 54.3169
                41.3626 54.3169C34.284 54.3169 28.5457 48.5786 28.5457 41.5Z"
            />
          </svg>
          <img
            className={styles.Evolution__PokemonImage}
            src={data?.sprites.other["official-artwork"].front_default}
          />
        </Link>
      </div>
    );
  } else {
    return <LoadingAnimation />;
  }
};

export default PokemonEvolution;

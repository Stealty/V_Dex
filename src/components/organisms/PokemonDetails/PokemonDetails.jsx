import styles from "./PokemonDetails.module.scss";
import { Link } from "react-router-dom";
import { Paragraph, PokemonImage } from "@atoms";
import { DetailsBackground, PokemonType, LikeHeart } from "@molecules";
import { useGetPokemonDetailsQuery } from "@api";
import { setPokemonDetailsSlice } from "../../../store/modules/pokemonSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function PokemonDetails(url) {
  const { data, isLoading, error } = useGetPokemonDetailsQuery(url);
  const dispatch = useDispatch();

  const id = data?.id.toString().padStart(3, "0");

  useEffect(() => {
    if (data?.results) {
      dispatch(setPokemonDetailsSlice(data.results));
    } else return;
  }, [isLoading]);

  return (
    <div className={styles.PokemonDetails}>
      <Link className={styles.PokemonDetails__backButton} to={-1}>
        <svg
          width="22"
          height="14"
          viewBox="0 0 22 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.0476 5.8724H3.25135L7.4978 1.62567C7.86982 1.25388 7.86982 0.650754 7.4978 0.279012C7.12578 -0.0930041 6.52266 -0.0930041 6.15119 0.279012L0.279012 6.1513C-0.0930041 6.5231 -0.0930041 7.12628 0.279012 7.49797L6.15119 13.3705C6.33715 13.5566 6.58085 13.6495 6.8245 13.6495C7.06814 13.6495 7.31185 13.5566 7.4978 13.3705C7.86982 12.9987 7.86982 12.3956 7.4978 12.0239L3.25135 7.77698H21.0476C21.5735 7.77698 22 7.35057 22 6.82466C22 6.29876 21.5736 5.8724 21.0476 5.8724Z"
            fill="white"
          />
        </svg>
      </Link>

      <div className={styles.LikeHeart__wrapper}>
        <LikeHeart />
      </div>

      <DetailsBackground />

      <section
        aria-label="Basics about Pokemon"
        className={styles.PokemonDetails__basics}
      >
        {isLoading ? (
          <Paragraph title="Loading..." color="white" weight="bold" size="36" />
        ) : (
          <>
            <div className={styles.PokemonDetails__title}>
              <Paragraph
                title={data?.name}
                color="white"
                size="36"
                weight="bold"
              />
              <Paragraph
                title={"#" + id}
                color="white"
                size="18"
                weight="bold"
              />
            </div>
            <div className={styles.PokemonType__wrapper}>
              <div className={styles.PokemonType__elements}>
                <PokemonType type={data?.types[0].type.name} />
                <PokemonType type={data?.types[1].type.name} />
              </div>
              <Paragraph
                title="Seed Pokemon"
                color="white"
                size="14"
                weight="light"
              />
            </div>
          </>
        )}

        <div className={styles.PokemonImage__wrapper}>
          <PokemonImage
            image={data?.sprites.other.dream_world.front_default}
            name={data?.name}
          />
        </div>
      </section>
      {/* <section aria-label="Details about Pokemon"></section> */}
    </div>
  );
}

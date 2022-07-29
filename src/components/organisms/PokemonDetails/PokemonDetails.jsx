import styles from "./PokemonDetails.module.scss";
import { Link } from "react-router-dom";
import { Paragraph, PokemonImage, BackArrow } from "@atoms";
import {
  DetailsBackground,
  PokemonType,
  LikeHeart,
  AboutTab,
  EvolutionList
} from "@molecules";
import { useGetPokemonSpeciesQuery } from "@api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonSpeciesSlice } from "@store/modules/pokemonSlice";

export default function PokemonDetails({ details, loading, name, failed }) {
  const { data, isLoading, error } = useGetPokemonSpeciesQuery(name);
  const id = details?.id.toString().padStart(3, "0");
  const dispatch = useDispatch();

  const description = data?.flavor_text_entries[6].flavor_text
    .toLowerCase()
    .replace(/[^\w ]/g, " ");

  useEffect(() => {
    try {
      !isLoading && dispatch(setPokemonSpeciesSlice(data));
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div
      className={
        styles.PokemonDetails +
        " " +
        styles[`PokemonDetails--${details?.types[0].type.name}`]
      }
    >
      <Link className={styles.PokemonDetails__backButton} to={-1}>
        <BackArrow fill="white" />
      </Link>

      <div className={styles.LikeHeart__wrapper}>
        <LikeHeart />
      </div>

      <DetailsBackground />

      <section
        aria-label="Basics about Pokemon"
        className={styles.PokemonDetails__basics}
      >
        {loading ? (
          <Paragraph title="Loading..." color="white" weight="bold" size="36" />
        ) : (
          <>
            <div className={styles.PokemonDetails__title}>
              <Paragraph
                title={details?.name}
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
                <PokemonType type={details?.types[0].type.name} />
                {details?.types[1] && (
                  <PokemonType type={details?.types[1].type.name} />
                )}
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
            image={details?.sprites.other.dream_world.front_default}
            name={details?.name}
          />
        </div>
      </section>
      <section aria-label="Details about Pokemon">
        <AboutTab data={details} description={description} />
      </section>
      <section aria-label="Pokémon Evolutions">
        {!isLoading && <EvolutionList species={data} details={details} />}
      </section>
    </div>
  );
}

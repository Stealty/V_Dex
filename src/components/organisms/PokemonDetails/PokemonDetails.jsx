import styles from "./PokemonDetails.module.scss";
import { Link } from "react-router-dom";
import { Paragraph, PokemonImage, BackArrow } from "@atoms";
import {
  DetailsBackground,
  PokemonType,
  LikeHeart,
  AboutTab,
  EvolutionList,
} from "@molecules";
import { useGetPokemonSpeciesQuery } from "@api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPokemonSpeciesSlice } from "@store/modules/pokemonSlice";
import { PokemonTabs } from "../../molecules";

export default function PokemonDetails({ details, loading, name, failed }) {
  const { data, isLoading, error } = useGetPokemonSpeciesQuery(name);
  const id = details?.id.toString().padStart(3, "0");
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);

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
      <Link className={styles.PokemonDetails__backButton} to={"/pokedex"}>
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
            image={details?.sprites.other["official-artwork"].front_default}
            name={details?.name}
          />
        </div>
      </section>

      <section
        aria-label="Details about Pokemon"
        className={styles.PokemonDetails__details}
      >
        <PokemonTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <ul className={styles.PokemonDetails__list}>
          {activeTab === 0 && (
            <li>
              {!isLoading && (
                <AboutTab
                  data={details}
                  description={description}
                  species={data}
                />
              )}
            </li>
          )}
          {activeTab === 1 && <li>Base Stats</li>}
          {activeTab === 2 && (
            <li>
              {!isLoading && <EvolutionList species={data} details={details} />}
            </li>
          )}
          {activeTab === 3 && <li>Moves</li>}
        </ul>
      </section>
    </div>
  );
}

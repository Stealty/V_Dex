import styles from "./PokemonDetails.module.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Paragraph, PokemonImage, BackArrow } from "@atoms";
import { PokemonType, LikeHeart, AboutTab, Evolutions } from "@molecules";
import { useGetPokemonSpeciesQuery } from "@api";
import { useEffect, useState, useRef, useMemo } from "react";
import {
  PokemonTabs,
  BaseStats,
  PokemonEvolution,
  DetailsBackground,
  MovesTab,
} from "@molecules";

export default function PokemonDetails({ details }) {
  const params = useParams();
  const { data, isLoading, error } = useGetPokemonSpeciesQuery(params.Pokeid);
  const [activeTab, setActiveTab] = useState(0);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const id = details?.id.toString().padStart(3, "0");
  const detailsRef = useRef();
  const previousRef = useRef();
  const nextRef = useRef();
  const navigate = useNavigate();

  const arrowsNavigate = useMemo(() => {
    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          previousRef.current.click();
          break;
        case "ArrowRight":
          nextRef.current.click();
          break;
      }
    });
  }, [isLoading]);

  const description = data?.flavor_text_entries[6].flavor_text
    .toLowerCase()
    .replace(/[^\w ]/g, " ");

  useEffect(() => {
    if (!isLoading) {
      setPrevious((details?.id - 1).toString());
      setNext((details?.id + 1).toString());
    }
  }, [details]);

  return (
    <div
      className={
        styles.PokemonDetails +
        " " +
        styles[`PokemonDetails--${details?.types[0].type.name}`]
      }
      ref={detailsRef}
    >
      <DetailsBackground />
      <Link className={styles.PokemonDetails__backButton} to={"/pokedex"}>
        <BackArrow fill="white" navigate={"/pokedex"} />
      </Link>

      <div className={styles.LikeHeart__wrapper}>
        <LikeHeart />
      </div>

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
                title={data?.genera[7].genus}
                color="white"
                size="14"
                weight="light"
              />
            </div>
          </>
        )}

        <div className={styles.PokemonImage__wrapper}>
          <div className={styles.PokemonImage__before}>
            {previous && (
              <PokemonEvolution pokemon={previous} reference={previousRef} />
            )}
          </div>

          <PokemonImage
            image={details?.sprites.other["official-artwork"].front_default}
            name={details?.name}
          />

          <div className={styles.PokemonImage__next}>
            {next && <PokemonEvolution pokemon={next} reference={nextRef} />}
          </div>
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
          {activeTab === 1 && (
            <li>{!isLoading && <BaseStats data={details?.stats} />}</li>
          )}
          {activeTab === 2 && (
            <li>
              {!isLoading && <Evolutions species={data} details={details} />}
            </li>
          )}
          {activeTab === 3 && (
            <li className={styles.PokemonDetails__item}>
              {!isLoading && <MovesTab moves={details?.moves} />}
            </li>
          )}
        </ul>
      </section>
    </div>
  );
}

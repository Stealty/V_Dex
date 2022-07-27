import styles from "./PokemonDetails.module.scss";
import { Link } from "react-router-dom";

import { Title, PokemonType } from "@atoms";
import { DetailsBackground } from "@molecules";

export default function PokemonDetails() {
  return (
    <div className={styles.PokemonDetails}>
      <Link className={styles.PokemonDetails__backButton} to={"/home"}>
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

      <button className={styles.PokemonDetails__likeButton}>
        <svg
          width="22"
          height="19"
          viewBox="0 0 22 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8906 2.03906C16.625 0.125 13.1484 0.398438 11 2.625C8.8125 0.398438 5.33594 0.125 3.07031 2.03906C0.140625 4.5 0.570312 8.52344 2.67969 10.6719L9.51562 17.6641C9.90625 18.0547 10.4141 18.2891 11 18.2891C11.5469 18.2891 12.0547 18.0547 12.4453 17.6641L19.3203 10.6719C21.3906 8.52344 21.8203 4.5 18.8906 2.03906ZM17.9531 9.34375L11.1172 16.3359C11.0391 16.4141 10.9609 16.4141 10.8438 16.3359L4.00781 9.34375C2.5625 7.89844 2.28906 5.16406 4.28125 3.48438C5.80469 2.19531 8.14844 2.39062 9.63281 3.875L11 5.28125L12.3672 3.875C13.8125 2.39062 16.1562 2.19531 17.6797 3.44531C19.6719 5.16406 19.3984 7.89844 17.9531 9.34375Z"
            fill="white"
          />
        </svg>
      </button>

      <DetailsBackground />

      <section
        aria-label="Basics about Pokemon"
        className={styles.PokemonDetails__basics}
      >
        <div className={styles.PokemonDetails__title}>
          <Title title="Bulbasaur" color="white" size="36" weight="bold" />
          <Title title="#001" color="white" size="18" weight="bold" />
        </div>
        <div className={styles.PokemonType__wrapper}>
          <div className={styles.PokemonType__elements}>
            <PokemonType type="Grass" />
            <PokemonType type="Grass" />
          </div>
          <Title title="Seed Pokemon" color="white" size="14" weight="light" />
        </div>
      </section>
      {/* <section aria-label="Details about Pokemon"></section> */}
    </div>
  );
}

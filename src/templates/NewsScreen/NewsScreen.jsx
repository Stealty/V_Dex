import styles from "./NewsScreen.module.scss";
import { NewsImages } from "@molecules";
import { Paragraph } from "@atoms";
import { BackArrow } from "@atoms";

export default function NewsScreen() {
  return (
    <div className={styles.NewsScreen}>
      <BackArrow navigate={"/home/"} />
      <img
        src="https://assets.pokemon.com/assets/cms2/img/video-games/video-games/pokemon_rumble_rush/pokemon-rumble-rush-169.jpg"
        alt="Picture from Pokemon Rumble Rush"
        className={styles.NewsScreen__logo}
      />
      <Paragraph
        title="Pokemon Rumble Rush Arrives"
        size="30"
        color="dark-gray"
      />
      <Paragraph
        title="15 May 2019"
        size="12"
        color="dark-gray"
        opacity="04"
        weight="light"
      />
      <Paragraph
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nisi at turpis."
        size="14"
        color="dark-gray"
        opacity="04"
        height="24"
      />
      <NewsImages />
      <Paragraph
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nisi at turpis faucibus maximus eget vel augue. Duis vel lorem eu ligula sollicitudin accumsan a at turpis."
        size="14"
        color="dark-gray"
        opacity="04"
        height="24"
      />
    </div>
  );
}

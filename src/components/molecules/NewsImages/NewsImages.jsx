import styles from "./NewsImages.module.scss";

export default function NewsImages() {
  return (
    <div className={styles.NewsImages}>
      <img
        src="./images/newsPhone.png"
        alt="Pokemon Rumble Rush on smarthphone"
        className={styles.NewsImages__smarthphone}
      />
      <img
        src="./images/newsPokeball.png"
        alt="Pokeball on hand"
        className={styles.NewsImages__pokeball}
      />
      <img
        src="./images/newsSwitch.png"
        alt="Pokemon Rumble Rush on Nintendo Switch"
        className={styles.NewsImages__switch}
      />
    </div>
  );
}

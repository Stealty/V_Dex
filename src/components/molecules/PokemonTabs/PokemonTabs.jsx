import styles from "./PokemonTabs.module.scss";

export default function PokemonTabs({ activeTab, setActiveTab }) {
  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  return (
    <div className={styles.PokemonTabs}>
      <ul className={styles.PokemonTabs__list}>
        <li
          className={
            activeTab === 0
              ? styles[`PokemonTabs__item--active`]
              : styles.PokemonTabs__item
          }
        >
          <button
            className={styles.PokemonTabs__button}
            onClick={() => handleTabChange(0)}
          >
            About
          </button>
        </li>
        <li
          className={
            activeTab === 1
              ? styles[`PokemonTabs__item--active`]
              : styles.PokemonTabs__item
          }
        >
          <button
            className={styles.PokemonTabs__button}
            onClick={() => handleTabChange(1)}
          >
            Base Stats
          </button>
        </li>
        <li
          className={
            activeTab === 2
              ? styles[`PokemonTabs__item--active`]
              : styles.PokemonTabs__item
          }
        >
          <button
            className={styles.PokemonTabs__button}
            onClick={() => handleTabChange(2)}
          >
            Evolution
          </button>
        </li>
        <li
          className={
            activeTab === 3
              ? styles[`PokemonTabs__item--active`]
              : styles.PokemonTabs__item
          }
        >
          <button
            className={styles.PokemonTabs__button}
            onClick={() => handleTabChange(3)}
          >
            Moves
          </button>
        </li>
      </ul>
    </div>
  );
}

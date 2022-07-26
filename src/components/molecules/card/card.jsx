import styles from "./card.module.scss";
import Pokeball from "../../atoms/pokeball/pokeball";

const card = {
    name: "bulbasaur",
    id: "001",
    type1: "grass",
    type2: "poison",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
}

const Card = () => {
    return <div className={styles.Card}>
        <h1 className={styles.Card__Name}>{card.name}</h1>
        <p className={styles.Card__Type1}>{card.type1}</p>
        {card.type2 != null && <p className={styles.Card__Type2}>{card.type2}</p>}
        <h2 className={styles.Card__Id}>#{card.id}</h2>
        <svg className={styles.Card__Pokeball} width="79" height="68" viewBox="0 0 79 68" xmlns="http://www.w3.org/2000/svg">
            <path d="M82.7252 44.9016H61.2602C59.6432 54.4287 51.3501 61.6831 41.3626 61.6831C31.3751 61.6831 23.082 54.4287 21.465 44.9016H0C1.73034 66.2303 19.5881 83 41.3626 83C63.1371 83 80.9949 66.2303 82.7252 44.9016ZM82.6859 37.6448H61.1779C59.3786 28.3421 51.191 21.3169 41.3626 21.3169C31.5342 21.3169 23.3466 28.3421 21.5473 37.6448H0.0392854C1.98408 16.5324 19.7427 0 41.3626 0C62.9825 0 80.7411 16.5324 82.6859 37.6448ZM28.5457 41.5C28.5457 34.4214 34.284 28.6831 41.3626 28.6831C48.4412 28.6831 54.1795 34.4214 54.1795 41.5C54.1795 48.5786 48.4412 54.3169 41.3626 54.3169C34.284 54.3169 28.5457 48.5786 28.5457 41.5Z" />
        </svg>
        <img className={styles.Card__Image} src={card.sprite} alt={card.name} />
    </div>
}

export default Card;
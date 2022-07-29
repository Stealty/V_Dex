import { PokemonCard, Modal, Filter, MenuHamburguer } from "@molecules";
import { Backdrop } from "@atoms";
import styles from "./PokedexScreen.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";

const PokedexScreen = () => {
    const pokemon = useSelector((state) => state.pokemon.pokemons.slice(0, 40));
    const [isActive, setActive] = useState(false);

    const onClickHandler = () => {
        setActive(!isActive);
    }
    return <div className={!isActive ? styles.PokedexScreen : styles.PokedexScreen + " " + styles["--active"]}>
        <MenuHamburguer></MenuHamburguer>
        <div className={styles.PokemonList}>
            {pokemon.map((pokemon) =>
                <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
        </div>
        <Filter onClick={onClickHandler} Active={isActive}></Filter>
        <Backdrop Active={isActive}>
            <Modal Active={isActive} />
        </Backdrop>
    </div>
};

export default PokedexScreen;

import { PokemonCard, Modal, Filter } from "@molecules";
import { Paragraph, Backdrop } from "@atoms";
import styles from "./PokedexScreen.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";

const PokedexScreen = () => {
    const pokemon = useSelector((state) => state.pokemon.pokemons.slice(0,40));
    const [isActive, setActive] = useState(false);

    const onClickHandler = () => {
        setActive(!isActive);
    }
        return <div className={styles.PokedexScreen}>
            <div className={styles.PokemonList}>
                {pokemon.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>)}
            </div>
            <Backdrop>
                <Modal Active={isActive} />
            </Backdrop>
            <Filter onClick={onClickHandler} Active={isActive}></Filter>
        </div>
};

export default PokedexScreen;

import { PokemonCard } from "@molecules";
import { Title } from "@atoms";
import styles from "./PokedexScreen.module.scss";
import { useGetPokemonQuery } from "@api";

const PokedexScreen = () => {
    const { data, isLoading, error } = useGetPokemonQuery(30);

    if (!isLoading) {
        return <div className={styles.PokedexScreen}>
            <div className={styles.PokemonList}>
                {data.results.map((pokemon) => <PokemonCard key={pokemon.name} pokemon={pokemon}></PokemonCard>)}
            </div>
        </div>
    } else {
        return <Title title="No Pokémon Found"></Title>
    }
}

export default PokedexScreen;
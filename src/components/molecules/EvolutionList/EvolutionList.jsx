import { useGetPokemonEvolutionQuery, useGetPokemonDetailsQuery } from "@api"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonEvolutionSlice } from "@store/modules/pokemonSlice";
import { Paragraph } from "@atoms";
import { PokemonEvolution } from "@molecules";

const EvolutionList = ({ species }) => {
    const { data, isLoading, error } = useGetPokemonEvolutionQuery(species.evolution_chain.url);
    const dispatch = useDispatch();
    useEffect(() => {
        try {
            !isLoading && dispatch(setPokemonEvolutionSlice(data));
        } catch (error) {
            console.log(error);
        }
    });

    if (!isLoading) {
        const pokemonstarter = data.chain.species.name;
        console.log(pokemonstarter);
        return (
            <div>
                <Paragraph title="Evolution Chain" />
                <PokemonEvolution pokemon={pokemonstarter} />
            </div>
        )
    }
}

export default EvolutionList;
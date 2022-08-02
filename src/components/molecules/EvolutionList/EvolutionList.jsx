import { Paragraph } from "@atoms";
import { PokemonEvolution } from "@molecules";
import styles from "./EvolutionList.module.scss";

const EvolutionList = ({ pokemon }) => {
    const PokemonEv = {
        trigger1: (pokemon.chain.evolves_to[0] != null | undefined ? pokemon.chain.evolves_to[0].evolution_details[0].trigger.name == "use-item" ? "using" : pokemon.chain.evolves_to[0].evolution_details[0].trigger.name : null),
        status1: (pokemon.chain.evolves_to[0] != null | undefined ? pokemon.chain.evolves_to[0].evolution_details[0].trigger.name == "use-item" ? pokemon.chain.evolves_to[0].evolution_details[0].item.name : pokemon.chain.evolves_to[0].evolution_details[0].min_level != null ? pokemon.chain.evolves_to[0].evolution_details[0].min_level : pokemon.chain.evolves_to[0].evolution_details[0].min_happiness ? "Happiness " + pokemon.chain.evolves_to[0].evolution_details[0].min_happiness : null : null),
        trigger2: (pokemon.chain.evolves_to[0] != null | undefined && pokemon.chain.evolves_to[0].evolves_to[0] != null | undefined ? pokemon.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name == "use-item" ? "using" : pokemon.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name : null),
        status2: (pokemon.chain.evolves_to[0] != null | undefined && pokemon.chain.evolves_to[0].evolves_to[0] != null | undefined ? pokemon.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name == "use-item" ? pokemon.chain.evolves_to[0].evolves_to[0].evolution_details[0].item.name : pokemon.chain.evolves_to[0].evolves_to[0].evolution_details[0].held_item ? "holding " + pokemon.chain.evolves_to[0].evolves_to[0].evolution_details[0].held_item.name : pokemon.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level != null ? pokemon.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level : pokemon.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_happiness ? "Happiness " + pokemon.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_happiness : null : null),
        trigger3: (pokemon.chain.evolves_to[0] != null | undefined && pokemon.chain.evolves_to[0].evolves_to[1] != null | undefined ? pokemon.chain.evolves_to[0].evolves_to[1].evolution_details[0].trigger.name == "use-item" ? "using" : pokemon.chain.evolves_to[0].evolves_to[1].evolution_details[0].trigger.name : null),
        status3: (pokemon.chain.evolves_to[0] != null | undefined && pokemon.chain.evolves_to[0].evolves_to[1] != null | undefined ? pokemon.chain.evolves_to[0].evolves_to[1].evolution_details[0].trigger.name == "use-item" ? pokemon.chain.evolves_to[0].evolves_to[1].evolution_details[0].item.name : pokemon.chain.evolves_to[0].evolves_to[1].evolution_details[0].held_item ? "holding " + pokemon.chain.evolves_to[0].evolves_to[1].evolution_details[0].held_item.name : pokemon.chain.evolves_to[0].evolves_to[1].evolution_details[0].min_level != null ? pokemon.chain.evolves_to[0].evolves_to[1].evolution_details[0].min_level : pokemon.chain.evolves_to[0].evolves_to[1].evolution_details[0].min_happiness ? "Happiness " + pokemon.chain.evolves_to[0].evolves_to[1].evolution_details[0].min_happiness : null : null),
        pokemon: pokemon.chain.species.name,
        Ev1: (pokemon.chain.evolves_to[0] != null | undefined ? pokemon.chain.evolves_to[0].species.name : null),
        Ev2: (pokemon.chain.evolves_to[0] != null | undefined && pokemon.chain.evolves_to[0].evolves_to[0] != null | undefined ? pokemon.chain.evolves_to[0].evolves_to[0].species.name : null),
        Ev3: (pokemon.chain.evolves_to[0] != null | undefined && pokemon.chain.evolves_to[0].evolves_to[1] != null | undefined ? pokemon.chain.evolves_to[0].evolves_to[1].species.name : null)
    };
    console.log(pokemon)
    return <div className={styles.Evolution}>
        {PokemonEv.Ev1 != null ? <div className={styles.Evolution__EvolutionStatus}>
            <PokemonEvolution pokemon={PokemonEv.pokemon} />
            <div className={styles.Evolution__Trigger}>
                <svg width="22" height="12" viewBox="0 0 22 12">
                    <path d="M0.95237 4.8724H18.7487L14.5022 1.62567C14.1302 1.25388 14.1302 0.650754 14.5022 0.279012C14.8742 -0.0930041 15.4773 -0.0930041 15.8488 0.279012L21.721 5.1513C22.093 5.5231 22.093 6.12628 21.721 6.49797L15.8488 11.3705C15.6629 11.5566 15.4192 11.6495 15.1755 11.6495C14.9319 11.6495 14.6882 11.5566 14.5022 11.3705C14.1302 10.9987 14.1302 10.3956 14.5022 10.0239L18.7487 6.77698H0.95237C0.426464 6.77698 0 6.35057 0 5.82466C0 5.29876 0.426411 4.8724 0.95237 4.8724Z" />
                </svg>
                <Paragraph
                    title={
                        PokemonEv.trigger1 +
                        " " +
                        (PokemonEv.status1 != null ? PokemonEv.status1 : "")
                    }
                    size="16"
                ></Paragraph>
            </div>
            <PokemonEvolution pokemon={PokemonEv.Ev1} />
        </div> : 
        <Paragraph title="This Pokémon has no Evolutions" />}

        {PokemonEv.Ev2 != null && <> <svg width="320" height="1" viewBox="0 0 320 1">
                <line y1="0.5" x2="320" y2="0.5" stroke="#F4F5F4" />
            </svg>

        <div className={styles.Evolution__EvolutionStatus}>
            <PokemonEvolution pokemon={PokemonEv.Ev1} />
            <div className={styles.Evolution__Trigger}>
                <svg width="22" height="12" viewBox="0 0 22 12">
                    <path d="M0.95237 4.8724H18.7487L14.5022 1.62567C14.1302 1.25388 14.1302 0.650754 14.5022 0.279012C14.8742 -0.0930041 15.4773 -0.0930041 15.8488 0.279012L21.721 5.1513C22.093 5.5231 22.093 6.12628 21.721 6.49797L15.8488 11.3705C15.6629 11.5566 15.4192 11.6495 15.1755 11.6495C14.9319 11.6495 14.6882 11.5566 14.5022 11.3705C14.1302 10.9987 14.1302 10.3956 14.5022 10.0239L18.7487 6.77698H0.95237C0.426464 6.77698 0 6.35057 0 5.82466C0 5.29876 0.426411 4.8724 0.95237 4.8724Z" />
                </svg>
                <Paragraph
                    title={
                        PokemonEv.trigger2 +
                        " " +
                        (PokemonEv.status2 != null ? PokemonEv.status2 : "")
                    }
                    size="16"
                ></Paragraph>
            </div>
            <PokemonEvolution pokemon={PokemonEv.Ev2} />
        </div>
        </>}
        {PokemonEv.Ev3 != null && <> <svg width="320" height="1" viewBox="0 0 320 1">
                <line y1="0.5" x2="320" y2="0.5" stroke="#F4F5F4" />
            </svg>

        <div className={styles.Evolution__EvolutionStatus}>
            <PokemonEvolution pokemon={PokemonEv.Ev2} />
            <div className={styles.Evolution__Trigger}>
                <svg width="22" height="12" viewBox="0 0 22 12">
                    <path d="M0.95237 4.8724H18.7487L14.5022 1.62567C14.1302 1.25388 14.1302 0.650754 14.5022 0.279012C14.8742 -0.0930041 15.4773 -0.0930041 15.8488 0.279012L21.721 5.1513C22.093 5.5231 22.093 6.12628 21.721 6.49797L15.8488 11.3705C15.6629 11.5566 15.4192 11.6495 15.1755 11.6495C14.9319 11.6495 14.6882 11.5566 14.5022 11.3705C14.1302 10.9987 14.1302 10.3956 14.5022 10.0239L18.7487 6.77698H0.95237C0.426464 6.77698 0 6.35057 0 5.82466C0 5.29876 0.426411 4.8724 0.95237 4.8724Z" />
                </svg>
                <Paragraph
                    title={
                        PokemonEv.trigger3 +
                        " " +
                        (PokemonEv.status3 != null ? PokemonEv.status3 : "")
                    }
                    size="16"
                ></Paragraph>
            </div>
            <PokemonEvolution pokemon={PokemonEv.Ev3} />
        </div>
        </>}
        
    </div>
}

export default EvolutionList;
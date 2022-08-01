import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: {},
    pokemons: [],
    generationFilter: [],
    pokemonSpecies: [],
    pokemonEvolution: {},
  },
  reducers: {
    setPokemonSlice: (state, action) => {
      state.pokemons = action.payload;
    },
    setPokemonDetailsSlice: (state, action) => {
      state.pokemon = action.payload;
    },
    setGenerationFilterSlice: (state, action) => {
      state.generationFilter = action.payload;
    },
    setPokemonSpeciesSlice: (state, action) => {
      state.pokemonSpecies = action.payload;
    },
    setPokemonEvolutionSlice: (state, action) => {
      state.pokemonEvolution = action.payload;
    },
  },
});

export const setPokemonSlice = pokemonSlice.actions.setPokemonSlice;
export const setPokemonDetailsSlice =
  pokemonSlice.actions.setPokemonDetailsSlice;

export const setGenerationFilterSlice =
  pokemonSlice.actions.setGenerationFilterSlice;

export const setPokemonSpeciesSlice =
  pokemonSlice.actions.setPokemonSpeciesSlice;

  export const setPokemonEvolutionSlice =
  pokemonSlice.actions.setPokemonEvolutionSlice;

export default pokemonSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: {},
    pokemons: [],
    pokemonSpecies: {},
  },
  reducers: {
    setPokemonSlice: (state, action) => {
      state.pokemons = action.payload;
    },
    setPokemonDetailsSlice: (state, action) => {
      state.pokemon = action.payload;
    },
    setPokemonSpeciesSlice: (state, action) => {
      state.pokemonSpecies = action.payload;
    },
  },
});

export const setPokemonSlice = pokemonSlice.actions.setPokemonSlice;
export const setPokemonDetailsSlice =
  pokemonSlice.actions.setPokemonDetailsSlice;

export const setPokemonSpeciesSlice =
  pokemonSlice.actions.setPokemonSpeciesSlice;

export default pokemonSlice.reducer;

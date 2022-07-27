import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    pokemon: {},
  },
  reducers: {
    setPokemonSlice: (state, action) => {
      state.pokemons = action.payload;
    },
    setPokemonDetailsSlice: (state, action) => {
      state.pokemon = action.payload;
    },
  },
});

export const setPokemonSlice = pokemonSlice.actions.setPokemonSlice;
export const setPokemonDetailsSlice =
  pokemonSlice.actions.setPokemonDetailsSlice;

export default pokemonSlice.reducer;

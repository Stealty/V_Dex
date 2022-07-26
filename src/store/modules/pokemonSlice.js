import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
  },
  reducers: {
    setPokemonSlice: (state, action) => {
      state.pokemons = action.payload;
    },
  },
});

export const setPokemonSlice = pokemonSlice.actions.setPokemonSlice;
export default pokemonSlice.reducer;

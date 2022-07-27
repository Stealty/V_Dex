import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi, pokemonDetailsApi } from "@api";
import pokemonSliceReducer from "@store/modules/pokemonSlice";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemonDetailsApi.reducerPath]: pokemonDetailsApi.reducer,
    pokemon: pokemonSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

// store.subscribe(() => {
//   console.log(store.getState().pokemon.pokemons);
// });

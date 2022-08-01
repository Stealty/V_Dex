import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  pokemonApi,
  pokemonDetailsApi,
  pokemonSpeciesApi,
  pokemonEvolutionApi,
} from "@api";
import pokemonSliceReducer from "@store/modules/pokemonSlice";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemonDetailsApi.reducerPath]: pokemonDetailsApi.reducer,
    [pokemonSpeciesApi.reducerPath]: pokemonSpeciesApi.reducer,
    [pokemonEvolutionApi.reducerPath]: pokemonEvolutionApi.reducer,
    pokemon: pokemonSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      pokemonDetailsApi.middleware,
      pokemonSpeciesApi.middleware,
      pokemonEvolutionApi.middleware
    ),
});

// setupListeners(store.dispatch);

// store.subscribe(() => {
//   console.log(store.getState().pokemon.pokemons);
// });

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { pokemonApi, pokemonDetailsApi } from "@api";
import pokemonSliceReducer from "@store/modules/pokemonSlice";
import { pokemonSpeciesApi } from "../../api";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemonDetailsApi.reducerPath]: pokemonDetailsApi.reducer,
    [pokemonSpeciesApi.reducerPath]: pokemonSpeciesApi.reducer,
    pokemon: pokemonSliceReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      pokemonDetailsApi.middleware,
      pokemonSpeciesApi.middleware
    ),
});

setupListeners(store.dispatch);

// store.subscribe(() => {
//   console.log(store.getState().pokemon.pokemons);
// });

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pokeapi.co/api/v2/pokemon/`,
  }),
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: (limit) => `?limit=${limit}`,
    }),
  }),
});

export const pokemonDetailsApi = createApi({
  reducerPath: "pokemonDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://pokeapi.co/api/v2/pokemon/` }),
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getPokemonDetails: builder.query({
      query: (pokemonid) => `/${pokemonid}`,
    }),
  }),
});

export const pokemonSpeciesApi = createApi({
  reducerPath: "pokemonSpeciesApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://pokeapi.co/api/v2/pokemon-species/` }),
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getPokemonEvolutions: builder.query({
      query: (pokemonid) => pokemonid,
    }),
  }),
});

export const pokemonEvolutionsApi = createApi({
  reducerPath: "pokemonEvolutionsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `https://pokeapi.co/api/v2/pokemon-species/` }),
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getPokemonEvolutions: builder.query({
      query: (url) => url,
    }),
  }),
});

export const { useGetPokemonDetailsQuery } = pokemonDetailsApi;

export const { useGetPokemonQuery } = pokemonApi;

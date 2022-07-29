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
<<<<<<< HEAD
  baseQuery: fetchBaseQuery({ baseUrl: `https://pokeapi.co/api/v2/pokemon/` }),
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getPokemonDetails: builder.query({
      query: (pokemonid) => `/${pokemonid}`,
=======
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon/" }),
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getPokemonDetails: builder.query({
      query: (name) => name,
>>>>>>> development
    }),
  }),
});

export const pokemonSpeciesApi = createApi({
  reducerPath: "pokemonSpeciesApi",
<<<<<<< HEAD
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
=======
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pokeapi.co/api/v2/pokemon-species/`,
  }),
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getPokemonSpecies: builder.query({
      query: (pokemonName) => pokemonName,
>>>>>>> development
    }),
  }),
});

export const { useGetPokemonDetailsQuery } = pokemonDetailsApi;

export const { useGetPokemonQuery } = pokemonApi;

export const { useGetPokemonSpeciesQuery } = pokemonSpeciesApi;

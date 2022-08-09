import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pokeapi.co/api/v2/pokemon-species/`,
  }),
  keepUnusedDataFor: 300,
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: (limit) => `?limit=${limit}`,
    }),
  }),
});

export const pokemonDetailsApi = createApi({
  reducerPath: "pokemonDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon/" }),
  keepUnusedDataFor: 300,
  endpoints: (builder) => ({
    getPokemonDetails: builder.query({
      query: (name) => name,
    }),
  }),
});

export const pokemonSpeciesApi = createApi({
  reducerPath: "pokemonSpeciesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://pokeapi.co/api/v2/pokemon-species/`,
  }),
  keepUnusedDataFor: 300,
  endpoints: (builder) => ({
    getPokemonSpecies: builder.query({
      query: (pokemonName) => pokemonName,
    }),
  }),
});

export const pokemonEvolutionApi = createApi({
  reducerPath: "pokemonEvolutionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: undefined,
  }),
  keepUnusedDataFor: 300,
  endpoints: (builder) => ({
    getPokemonEvolution: builder.query({
      query: (url) => url,
    }),
  }),
});

export const { useGetPokemonDetailsQuery } = pokemonDetailsApi;

export const { useGetPokemonQuery } = pokemonApi;

export const { useGetPokemonSpeciesQuery } = pokemonSpeciesApi;

export const { useGetPokemonEvolutionQuery } = pokemonEvolutionApi;

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
  baseQuery: fetchBaseQuery({ baseUrl: undefined }),
  keepUnusedDataFor: 86400,
  endpoints: (builder) => ({
    getPokemonDetails: builder.query({
      query: (url) => url,
    }),
  }),
});

export const { useGetPokemonDetailsQuery } = pokemonDetailsApi;

export const { useGetPokemonQuery } = pokemonApi;

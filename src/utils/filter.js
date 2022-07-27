function handleFilterPokemons(event) {
  const filterPokemons = pokemons.pokemons.filter((pokemon) => {
    return pokemon.name.includes(event.target.value.trim().toLowerCase());
  });
  setFilteredPokemons(filterPokemons);
}

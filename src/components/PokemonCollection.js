import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonData, searchTerm }) {


  const pokemonCards = pokemonData.map(pokemon => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} />
  ))


  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;

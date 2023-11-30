import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then(data => setPokemonData(data))
  }, [])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredPokemon = pokemonData.filter(pokemon => (
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  const handleAddPokemon = (newPokemon) => {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {"content-type": "application/json",
    },
    body: JSON.stringify(newPokemon)
    })
    .then((resp) => resp.json())
    .then((newPokemon) => {
      setPokemonData([...pokemonData, newPokemon])
    })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search onSearchChange={handleSearchChange}/>
      <br />
      <PokemonCollection pokemonData={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;

import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [showFront, setShowFront] = useState(true)

  const handleClick = () => {
    setShowFront(!showFront)
  }


  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={showFront ? pokemon.sprites.front : pokemon.sprites.back} alt="pokemon.name" />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

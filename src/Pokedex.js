import React from 'react';
import Button from './Button';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayPokemon: 0
    }
  }

  render() {
    const { pokemons } = this.props;
    const { arrayPokemon } = this.state;
    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemons[arrayPokemon]} />
        <Button onClick={() => this.setState(e =>({arrayPokemon: e.arrayPokemon + 1}))}>All</Button>
      </div>
    );
  }
}

export default Pokedex;

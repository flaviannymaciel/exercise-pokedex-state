import React from 'react';
import Button from './Button';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        pokemonIndex: 0,
        filteredType: 'all'
    };
  }
    
  filterPokemons(filteredType) {
    this.setState({filteredType, pokemonIndex: 0});
  }

  render() {
    const { pokemons } = this.props;
    const pokemon = filteredPokemons[this.state.pokemonIndex];
    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemon} />
        <Button  onClick={() => this.filterPokemons('all')}>All</Button>
        <Button />
        <Button />
      </div>
    );
  }
}

export default Pokedex;

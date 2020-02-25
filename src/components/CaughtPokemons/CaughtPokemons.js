import React, { Component } from 'react';
import PokemonCard from '../PokemonCard/PokemonCard.js';
import '../../App.css';
import { connect } from 'react-redux';


class CaughtPokemons extends Component {
  render() {
    const { pokemons } = this.props;
    return (

      <div className="App">
        <div className="content">Your pokemons</div>
        <ul className="pokemon-list">
          {pokemons.filter((pokemon) => pokemon.isСaught).map((selectedPokemon) => (
            <PokemonCard id={selectedPokemon.id} key={selectedPokemon.id} name={selectedPokemon.name} isCaught={selectedPokemon.isСaught} caughtDate={selectedPokemon.caughtDate} />
          ))}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  pokemons: state.pokemons.data,
});

export default connect(mapStateToProps, () => {})(CaughtPokemons);

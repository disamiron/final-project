import React, { Component } from "react";
import PokemonCard from "../PokemonCard/PokemonCard.js";
import '../../App.css';
import { connect } from 'react-redux';
import { getPokemons } from '../../actions/pokemons.js';

class PokemonList extends Component {
    
  componentDidMount() {
    if (!this.props.pokemons.length) {
    this.props.loadPokemons();
    this.props.loadPokemons(1);
  }
};

    loadMore = () => {  
      const {page} = this.props;
      this.props.loadPokemons(page+1);
    };

    render() {

        const { pokemons, maxPage, page } = this.props;
          return (
            <div className="App">
              <div className="content">Pokemons library</div>
                <ul className="pokemon-list">
                {pokemons.map((pokemon) => (
                <PokemonCard id={pokemon.id} key={pokemon.id} name={pokemon.name} isCaught={pokemon.isСaught} caughtDate={pokemon.caughtDate}/>
                ))}
                </ul>
              {(page < maxPage) &&
                (<button onClick={this.loadMore} className="load-button">LOAD MORE</button>)
              }
            </div>
          );
    }
  }


const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemons: (arg) => dispatch(getPokemons(arg))
    };
}
const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons.data,
        maxPage: state.pokemons.maxPage,
        page: state.pokemons.page,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
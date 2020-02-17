import React, { Component } from "react";
import PokemonCard from "../PokemonCard/PokemonCard.js";
//import './PokemonList.css';

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pokemons: []
        };
      }

    componentDidMount() {
        fetch("../../../db.json")
        .then(res => res.json())
        
            
        .then(
              
            (result) => {

              this.setState({
                
                pokemons: result.pokemons
              });
            }
          )
      };

    render() {
        const { pokemons } = this.state;
        return (
            <div className="App">
            <h1>POKEMONS LIST</h1>
            <div>
            {pokemons.map((pokemon) => (
            <PokemonCard id={pokemon.id} key={pokemon.id} name={pokemon.name} />
             ))}
            </div>
            </div>
        );
    }
}

export default PokemonList;
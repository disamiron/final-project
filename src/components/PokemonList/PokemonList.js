import React, { Component } from "react";
import PokemonCard from "../PokemonCard/PokemonCard.js";
import '../../App.css';

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          pokemons: [],
          page: 0,
        };
      }

    componentDidMount() {
        fetch("../../../db.json")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              pokemons: result.pokemons
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            })
          }
        )
      };

//fetch data and update state. new state should have old pokemons and new path
    loadMore=()=>{
      const oldState = this.state;
//      const newState = 
      this.setState({
        pokemons: [{
          "name": "bulbasaur",
          "id": 1
        }]
      })
    };


    render() {
        const { error, isLoaded, pokemons } = this.state;
        if (error) {
          return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Загрузка...</div>;
        } else {
          return (
            <div className="App">

                <ul className="pokemon-list">
                {pokemons.map((pokemon) => (
                <PokemonCard id={pokemon.id} key={pokemon.id} name={pokemon.name} />
                ))}
                </ul>
              <button onClick={this.loadMore}>LOAD MORE</button>
            </div>
        );
      }
    }

 

}

export default PokemonList;
import React, { Component } from "react";
import PokemonCard from "../PokemonCard/PokemonCard.js";
import '../../App.css';

//TODO: Move get pokemons from class to separate file 


const limit = 24; //количество загружаемых покемонов

class PokemonList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        pokemons: [],
        page: 1,
        maxPage: 1,
      };
    }

  getPokemons = (page) => {
    const url = page
    ? `http://localhost:3000/pokemons?_page=${page}&_limit=${limit}`
    : "http://localhost:3000/pokemons";
    return fetch(url).then(res => res.json())
  }

 
    
    componentDidMount() {
      //number of pokemons
       this.getPokemons()
        .then(
          (results) => {
            this.setState({
              maxPage: Math.ceil(results.length/limit)
            })
          }  
        )
        this.getPokemons(1)
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              pokemons: result,
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
     
      const {page, pokemons} = this.state;
      this.getPokemons(page+1)
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            pokemons: [
              ...pokemons,
              ...result
            ],
            page: page + 1
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

    render() {
        const { error, isLoaded, pokemons, page, maxPage } = this.state;
        if (error) {
          return <div>ERROR: {error.message}</div>;
        } else if (!isLoaded) {
          return <div className="loading-info">LOADING...</div>;
        } else {
          return (
            <div className="App">
                <ul className="pokemon-list">
                {pokemons.map((pokemon) => (
                <PokemonCard id={pokemon.id} key={pokemon.id} name={pokemon.name} />
                ))}
                </ul>


              {(page < maxPage) &&
                (<button onClick={this.loadMore} className="load-button">LOAD MORE</button>)
              }
            </div>
        );
      }
    }
}

export default PokemonList;
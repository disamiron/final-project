import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './App.css';

//TODO: fix import
import PokemonList from "./components/PokemonList/PokemonList.js";

// const pokemons = [
//     {
//         id: 1,
//         name: "pika"
//     },
//     {
//         id: 2,
//         name: "pika2"
//     }
// ];

// const Pokemon = (props) => (
//     <div>
//         <span>{props.name}</span>
//         <span>{props.id}</span>
//     </div>
// );
    

// class PokemonList extends Component {
//     render() {
//         return (
//             <div>
//             <h1>POKEMONS LIST:</h1>
//             <div>
//                 {pokemons.map(pokemon => (
//                     <Pokemon
//                         name={pokemon.name}
//                         id={pokemon.id}
//                     />
//                 ))}
//             </div>
//             </div>
//         );
//     }
// };

class App extends Component {
    render() {
        return (
        <Router>
            <h2>POKEDEX</h2>
            <Switch>
                <Route exact path="/" component={PokemonList} />
                <Route exact path="/pokemon">
                    <h1>Pokemon</h1>
                </Route>
            </Switch>
    </Router>
        );
    }
}



export default App;
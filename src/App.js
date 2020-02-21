import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './App.css';
import PokemonList from "./components/PokemonList/PokemonList.js";
import PokemonPage from "./components/PokemonPage/PokemonPage.js";

class App extends Component {
    render() {
        return (
        <Router>
            <div className="menu">
            <Link to={`${"/"}`}>POKEDEX</Link>
            <Link to={`${"/caught"}`} className="your-pokemons-button">Your pokemons</Link>
            </div>
            <Switch>
                <Route exact path="/" component={PokemonList} />
                <Route exact path="/caught"/>
                <Route exact path="/:pokemonId" component={PokemonPage} />
            </Switch>
        </Router>
        );
    }
}

export default App;
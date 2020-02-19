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
            <h1>POKEDEX</h1>
            <Switch>
                <Route exact path="/" component={PokemonList} />
                <Route exact path="/:pokemonId" component={PokemonPage} />
            </Switch>
        </Router>
        );
    }
}

export default App;
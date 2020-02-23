import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonPage from './components/PokemonPage/PokemonPage';
import СaughtPokemons from './components/CaughtPokemons/CaughtPokemons';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="menu">
          <div className="pokedex-menu">
            <Link to={`${'/'}`}>POKEDEX</Link>
          </div>
          <div className="your-pokemon-menu">
            <Link to={`${'/caught'}`} className="your-pokemons">Your pokemons</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/caught" component={СaughtPokemons} />
          <Route exact path="/:pokemonId" component={PokemonPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { caughtPokemon } from '../../actions/pokemons';
import '../../App.css';

const PokemonCard = ({
  id, name, isCaught, caughtPokemon, caughtDate,
}) => (
  <li className="pokemon-card">
    <Link to={`${id}`}>
      <img
        className="pokemon-img"
        src={`../../../pokemons/${id}.png`}
        alt=""
        width="170px"
        height="170px"
      />
      <div className="pokemon-name">{name}</div>
    </Link>
    <div className="checkbox-menu">

      <div className="checkbox">
        <input type="checkbox" id={`trigger${id}`} onChange={(event) => caughtPokemon(id, event.target.checked)} checked={isCaught} />
        <label htmlFor={`trigger${id}`} className="checkbox-icon" />
      </div>
      <div className="checkbox-date">
        <div className="checkbox-date-logo">
          <div className="checkbox-date-text">{caughtDate}</div>
        </div>

      </div>
    </div>
  </li>
);

const mapDispatchToProps = (dispatch) => ({
  caughtPokemon: (id, isCaught, caughtDate) => dispatch(caughtPokemon(id, isCaught, caughtDate)),
});

export default connect(null, mapDispatchToProps)(PokemonCard);

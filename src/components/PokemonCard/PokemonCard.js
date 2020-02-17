import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";


function PokemonCard ({ id, name }) {
        return (
            <div className="pokemon-card">
                <Link to={`${id}`}>
                <img
                    className="pokemon-img"
                    src={`../../../pokemons/${id}.png`}
                    alt=""
                   
                />
                <br />
                <div className="pokemon-name">{name}</div>
                </Link>
            </div>
    );
  }


export default PokemonCard;


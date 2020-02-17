import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../App.css";



const PokemonCard = ({ id, name }) => 
        (
            <li className="pokemon-card">
                <Link to={`${id}`}>
                <img
                    className="pokemon-img"
                    src={`../../../pokemons/${id}.png`}                   
                    alt=""
                    width="100px"
                    height="100px"
                />
                <div className="pokemon-name">{name}</div>
                </Link>
            </li>
        );



export default PokemonCard;


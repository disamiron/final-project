import React, { Component } from "react";
import "../../App.css";

class PokemonPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.match.params.pokemonId,
          name: "",
        };
      }
    
      componentDidMount() {
            fetch(`http://localhost:3000/pokemons/${this.state.id}`)
                .then(res => res.json())
                .then(
                    (result) => {
                      this.setState({
                        
                        name: result.name
                      })
                    }  
                  )
      }
    render() {
       return (
           <div className="pokemon-page">
               <img
                   className="pokemon-img"
                   src={`../../../pokemons/${this.state.id}.png`}                   
                   alt=""
                   width="200px"
                   height="200px"
               />
               <div className="pokemon-name">{this.state.name}</div>
               
           </div>
       );
    }
}



export default PokemonPage;
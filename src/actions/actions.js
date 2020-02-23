export const togglePok = (id) => {
    return {
        type: "TOGGLE_CAUGHT",
        id
    }
}

const mapStateProps = (state) => {
	return {
	pokemons: state
	}
}

const mapDispatchProps = (dispatch) => {
	return {
	togglePok: (id) => dispatch(togglePok(id))
	}
}

PokemonList = connect(
	mapStateProps,
	mapDispatchProps
)(PokemonList);
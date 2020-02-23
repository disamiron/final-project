const caughtAction = (state, action) => {

    switch (action.type) {
        case "TOGGLE_CAUGHT":
            return state.map(pokemon => {
                if (pokemon.id === action.id) {
                    return {
                        id: pokemon.id, caught: !pokemon.caught
                    }
                } else {
                    return [
                        ...state,
                        {
                            id: action.id, caught: true
                        }
                    ]
                }
            })
        default:
            return state;
    }
}

export default caughtAction;
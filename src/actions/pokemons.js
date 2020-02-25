export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAILURE = 'GET_POKEMON_FAILURE';
export const SET_MAX_PAGE = 'SET_MAX_PAGE';
export const UPDATE_POKEMONS = 'UPDATE_POKEMONS';

const limit = 24; // количество загружаемых покемонов

export const getPokemons = (page) => {
  const url = page
    ? `http://localhost:3000/pokemons?_page=${page}&_limit=${limit}`
    : 'http://localhost:3000/pokemons';

  return (dispatch) => fetch(url).then((res) => res.json())
    .then((response) => {
      if (page) {
        dispatch({
          type: GET_POKEMONS_SUCCESS,
          payload: {
            data: response.map((pokemon) => ({ ...pokemon, isСaught: false, caughtDate: "Not yours" })),
            page,
          },
        });
      } else {
        dispatch({
          type: SET_MAX_PAGE,
          payload: Math.ceil(response.length / limit),
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: GET_POKEMONS_FAILURE,
        error,
      });
    });
};

export const caughtPokemon = (id, isCaught) => (dispatch, getState) => {
  const pokemonsList = getState().pokemons.data;

  if (isCaught == true) {
    const d = new Date();

    const month = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');

    var todayDate = (`${month[d.getMonth()]} ${d.getDate()}`);
  } else {
    todayDate = "Not yours";
  }
  const newPokemons = pokemonsList.map((pokemon) => {
    if (pokemon.id === id) {
      return ({ ...pokemon, isСaught: isCaught, caughtDate: todayDate });
    }
    return pokemon;
  });
  dispatch({
    type: UPDATE_POKEMONS,
    payload: newPokemons,
  });
};

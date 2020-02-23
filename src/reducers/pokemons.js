import {
  GET_POKEMONS_SUCCESS, GET_POKEMONS_FAILURE, SET_MAX_PAGE, UPDATE_POKEMONS,
} from '../actions/pokemons';

const initialState = {
  data: [],
  error: '',
  maxPage: 1,
  page: 1,
};

export default function pokemons(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data,
          ...action.payload.data,
        ],
        page: action.payload.page,
      };

    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        data: [],
        error: action.error.message,
      };
    case SET_MAX_PAGE:
      return {
        ...state,
        maxPage: action.payload,
      };

    case UPDATE_POKEMONS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

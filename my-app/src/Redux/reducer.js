import {
  GET_RECIPES,
  GET_RECIPE_BY_NAME,
  GET_RECIPE_BY_ID,
  ADD_RECIPE,
  CLEAR_DETAIL,
  SET_SORT_TYPE,
  SET_DIET_TYPE,
} from "./actions";

let inicialState = {
  recipes: [],
  diets: [],
  detailRecipe: [],
  sortType: "all",
  dietType: "all",
};

function rootReducer(state = inicialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    case GET_RECIPE_BY_NAME:
      return {
        ...state,
        recipes: action.payload,
      };

    case GET_RECIPE_BY_ID:
      return {
        ...state,
        detailRecipe: action.payload,
      };

    case ADD_RECIPE:
      return {
        ...state,
        recipes: action.payload,
      };

    case CLEAR_DETAIL:
      return { ...state, detailRecipe: {} };

    case SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };

      case SET_DIET_TYPE:
      return {
        ...state,
        dietType: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;

import { GET_RECIPES, GET_RECIPE_BY_NAME,GET_RECIPE_BY_ID } from "./actions";



let inicialState = {recipes:[], diets :[], detailRecipe:[]}


function rootReducer(state= inicialState, action){
    switch(action.type){
        case  GET_RECIPES:
          return{
            ...state,
            recipes: action.payload,
          }



        case GET_RECIPE_BY_NAME:
          return{
            ...state,
            recipes:action.payload
          }
        

          case GET_RECIPE_BY_ID:
          return{
            ...state,
            detailRecipe:action.payload

          }


          default:
            return {
              ...state,
            };

    }
}




export default rootReducer;

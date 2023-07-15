import { GET_RECIPES } from "./actions";



let inicialState = {recipes:[], diets :[]}


function rootReducer(state= inicialState, action){
    switch(action.type){
        case  GET_RECIPES:
          return{
            ...state,
            recipes: action.payload,
          }

        default:
            return {
              ...state,
            };

    }
}




export default rootReducer;

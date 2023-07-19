import axios from "axios"


export const GET_RECIPES = "GET_RECIPES"
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME"
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID"
export const ADD_RECIPE = "ADD_RECIPE"
export const CLEAR_DETAIL ="CLEAR_DETAIL"
export const SET_SORT_TYPE = "SET_SORT_TYPE"
export const SET_DIET_TYPE ="SET_DIET_TYPE"

export function  getallrecipes(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/recipes");
        return dispatch({
            type: "GET_RECIPES",
            payload: response.data,
        })
    }
}


export function  getRecipesByname(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001/recipes?name=${name}`);
        return dispatch({
            type: "GET_RECIPE_BY_NAME",
            payload: response.data,
        })
    }
}

export function getRecipesById(id) {
    return async function (dispatch) {
      const response = await axios(`http://localhost:3001/recipes/${id}`);
      return dispatch({
        type: GET_RECIPE_BY_ID,
        payload: response.data,
      });
    };
  }


  export const recipeCreate = (input) => {
    const endpoint = 'http://localhost:3001/recipes';
    return async (dispatch) => {
      const response = await axios.post(endpoint,input);
      dispatch({
        type: ADD_RECIPE,
        payload: response.data,
      });
    };
  };


  export const clearDetail = () =>{
    return (dispatch)=>{
       dispatch({type:CLEAR_DETAIL})}
  }
 
  export const setSortType = (sortType) => {
    return {
      type: SET_SORT_TYPE,
      payload: sortType,
    };
  };

  export const setDietType = (dietType) => {
    return {
      type: SET_DIET_TYPE,
      payload: dietType,
    };
  };

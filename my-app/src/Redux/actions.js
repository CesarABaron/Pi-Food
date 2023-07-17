import axios from "axios"


export const GET_RECIPES = "GET_RECIPES"
export const GET_RECIPE_BY_NAME = "GET_RECIPE_BY_NAME"
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID"



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

export function  getRecipesById(id){
    return async function(dispatch){
        const response = await axios(`http://localhost:3001//recipes/${id}`);
        return dispatch({
            type: "GET_RECIPE_BY_ID",
            payload: response.data,
        })
    }
}

import axios from "axios"


export const GET_RECIPES = "GET_RECIPES"





export function  getallrecipes(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/recipes");
        return dispatch({
            type: "GET_RECIPES",
            payload: response.data,
        })
    }
}
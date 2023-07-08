const axios = require ("axios");
const {Recipe} = require ("../db")
require('dotenv').config();



const getRecipeByIdController = async (id, source) =>{

    
    if(source === "api"){ //Si source es api, busca dentro de la pi, de lo contrario dentro de la bdd.
        //Obtiene la receta de la api.
        const recipeApi = (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true`)).data
        //Se queda con la info relevante.
        const recipe = {
            id: recipeApi.id ? recipeApi.id : "undefined",
            name: recipeApi.title ? recipeApi.title : "undefined",
            image: recipeApi.image ? recipeApi.image : "undefined",
            plateResume: recipeApi.summary ? recipeApi.summary : "undefined",
            healthScore: recipeApi.healthScore ? recipeApi.healthScore : "undefined",
            stepByStep: recipeApi.analyzedInstructions[0]?.steps?.map((step) => step.step) || [],
            myDiets: recipeApi.diets,
            createdInDb: false
        }
        return recipe; //Retorna la receta
    }else{
        //Obtiene la receta de la bdd
        const recipe = await Recipe.findByPk(id)
        return recipe; //Retorna la receta
    }

}



module.exports = getRecipeByIdController;
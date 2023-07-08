const axios = require("axios")
const {Recipe} = require ("../db")
const {apiFilter} = require("../Tools/filterRecipes")
const {API_KEY} = process.env;
const {Op} = require("sequelize")

const getRecipeByNameController = async (name)=>{
    const dataBaseResponse = await Recipe.findAll(
        {
            where: {
                name: {
                  [Op.iLike]: `%${name}%`,
                },
              },
        }
    )
    const apiAll = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)).data.results

    const apiFiltered = await apiFilter(apiAll)

    const apiResponse = apiFiltered.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))

    
    const response = [...dataBaseResponse, ...apiResponse]
    if(response.length) return response
    throw Error("Sin coincidencias")
}


const getAllRecipesController = async () => {
    const dataBaseResponse = await Recipe.findAll();
    const apiAll = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`);
    const apiResponse = await apiFilter(apiAll.data.results); 
  
    return [...dataBaseResponse, ...apiResponse];
  };

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



module.exports ={
    getRecipeByIdController,
    getAllRecipesController,
    getRecipeByNameController,
}




    

const { Router } = require('express');
const {
    getRecipeByIdHandler,
    // createRecipeHandler,
    getRecipeHandler,
}
= require("../handlers/recipeHandler")



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// const getRecipeById = async () => {
//     const apiUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?api_key={API_KEY}")
    
// }


//-----------------Gets-----------------

//Obtiene una receta mediandte un id (uuid o numerico).
router.get("/recipes/:id", getRecipeByIdHandler)


//Obtiene un arreglo de recetas buscadas e incluidas por query (no keySensitive).
//Caso contrario de no tener query, devuelve un arreglo con api+bdd.
router.get("/recipes", getRecipeHandler)


//Obtiene un arreglo todos los tipos de dietas.
// router.get("/diets", getDietsHandler)


// //-----------------Post-----------------

// //Crea unn nueva receta con un uuid y una propiedad createdInDb=true.
// //Además es la encargada de crear la relación.
// router.post("/recipes", createRecipeHandler)










module.exports = router;



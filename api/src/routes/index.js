const { Router } = require('express');
const {
    getRecipeByIdHandler,
    createRecipeHandler,
    getRecipeHandler,

}
= require("../handlers/recipeHandler")

const {getDietsHandler} = require("../handlers/dietsHandlers")
const {validate} = require("../Tools/validate")


const router = Router();


router.get("/recipes/:id", getRecipeByIdHandler)
router.get("/recipes", getRecipeHandler)
router.get("/diets", getDietsHandler)
router.post("/recipes",validate, createRecipeHandler)








module.exports = router;



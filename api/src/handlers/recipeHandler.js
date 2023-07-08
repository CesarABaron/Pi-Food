const {getRecipeByIdController, getRecipeByNameController,getAllRecipesController } = require("../controllers/getRecipeControler")




const getRecipeByIdHandler = async (req, res) =>{
    const {id} = req.params
    const sourceFlag = isNaN(id) ? "bdd" : "api";
    try {
        const recipe = await getRecipeByIdController(id, sourceFlag)
        res.status(200).json(recipe) 
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}



const getRecipeHandler = async(req,res) =>{
    try {
        const {name} = req.query
        const response = 
        name

        ? await getRecipeByNameController(name)
        : await getAllRecipesController()
        
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



module.exports={
    getRecipeByIdHandler,getRecipeHandler
}


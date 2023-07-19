const {Diets} = require("../db")


const  validate = async (req,res,next)  => {
    const {name,image,plateResume,healthScore,stepByStep,myDiets} = req.body;
    if (!name)  return res.status(400).json ({error: "Missing name"})
    if (!image)  return res.status(400).json ({error: "Missing image"})
    if (!plateResume)  return res.status(400).json({error: "Missing plateResume or is incorrect "})
    if (!healthScore)  return res.status(400).json ({error: "Missing healthScore"})
    if (!stepByStep || typeof stepByStep !== "object")  return res.status(400).json ({error: "Missing stepByStep most be a validate object"})
    if (!myDiets || typeof myDiets !== "object")  return res.status(400).json({error: "Missing myDiets most be a validate object"})

          // Obtiene todas las dietas existentes en la base de datos
  const existingDiets = await Diets.findAll();

  // Verifica si los nombres de dieta en myDiets son diferentes a los existentes en la base de datos
  const invalidDiets = myDiets.filter((dietName) => {
    return !existingDiets.some((diet) => diet.name === dietName);
  });

  if (invalidDiets.length > 0) {
    return res.status(400).json({error:` Los siguientes nombres de dieta no son válidos: ${invalidDiets.join(", ")}`})
  }
    next();

    
};

module.exports = {validate}



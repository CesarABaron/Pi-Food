
const validate = (req,res,next) => {
    const {name,image,plateResume,healthScore,stepByStep,myDiets} = req.body;
    if (!name)  return res.status(400).json ({error: "Missing name"})
    if (!image)  return res.status(400).json ({error: "Missing image"})
    if (!plateResume)  return res.status(400).json({error: "Missing plateResume or is incorrect "})
    if (!healthScore)  return res.status(400).json ({error: "Missing healthScore"})
    if (!stepByStep || typeof stepByStep !== "object")  return res.status(400).json ({error: "Missing stepByStep most be a validate object"})
    if (!myDiets || typeof myDiets !== "object")  return res.status(400).json({error: "Missing myDiets most be a validate object"})

    next();

    
};

module.exports = {validate}



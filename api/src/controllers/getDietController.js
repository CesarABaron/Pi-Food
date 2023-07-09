const {Diets} = require("../db")
const axios = require("axios")
const {API_KEY} = process.env;

const getApiDiets = async () => {
    try {
      const db = await Diets.findAll();
      if (db.length === 0) {
        const apiAll = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=40&addRecipeInformation=true`);
        const dietsRaw = apiAll.data.results.map(x => x.diets);
  
        let dietsRepeated = [];
        dietsRaw.forEach(x => {
          if (Array.isArray(x)) {
            x.forEach(z => dietsRepeated.push(z));
          } else {
            dietsRepeated.push(x);
          }
        });
  
        const diets = [...new Set(dietsRepeated)];
  
        for (let i = 0; i < diets.length; i++) {
          await Diets.create({ name: diets[i] });
        }
        console.log("bdd cargada con éxito");
      } else {
        console.log("la bdd ya está cargada");
      }
    } catch (error) {
      return { error: error.message };
    }
  };


const getDietsController = async () => {
    const diets = await Diets.findAll()
    return diets
}


module.exports = {getDietsController,getApiDiets}
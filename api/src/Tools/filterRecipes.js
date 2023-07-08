const apiFilter = async (array) => {
    const clear = array.map((rep) => {
        return {
            id: rep.id ? rep.id : "undefined",
            name: rep.title ? rep.title : "undefined",
            image: rep.image ? rep.image : "undefined",
            plateResume: rep.summary ? rep.summary : "undefined",
            healthScore: rep.healthScore ? rep.healthScore : "undefined",
            stepByStep: rep.analyzedInstructions[0]?.steps?.map((step) => step.step) || [],
            myDiets: rep.diets,
            createdInDb: false
        };
    });

    return clear;
};



module.exports ={apiFilter}
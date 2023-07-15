import React from 'react';
import Card from "../Card/card.component";
import style from "./cards.module.css";

function Cards({ recipes }) {
  const recipeList = recipes;

  return (
    <div className={style.container}>
      {recipeList?.map((recipe) => (
        <Card
          key={recipe.id}
          image={recipe.image}
          name={recipe.name}
          plateResume={recipe.plateResume}
          healthScore={recipe.healthScore}
          stepByStep={recipe.stepByStep}
          myDiets={recipe.myDiets}
        />
      ))}
    </div>
  );
}

export default Cards;
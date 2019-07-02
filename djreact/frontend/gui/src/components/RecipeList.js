import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {
        recipes.map((recipe, i) => {
          return (
            <Recipe
              key={i}
              name={recipe.title}
              author={recipe.content}
              />
          );
        })
      }
    </div>
  );
}

export default RecipeList;
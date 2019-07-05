import React from 'react';
import Recipe from './RecipeCard';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {
        recipes.map((aRecipe, i) => {
          return (
            <Recipe
              key={i}
              id = {aRecipe.id}
              name={aRecipe.name}
              author={aRecipe.author}
              tags={aRecipe.tags}
              />
          );
        })
      }
    </div>
  );
}

export default RecipeList;
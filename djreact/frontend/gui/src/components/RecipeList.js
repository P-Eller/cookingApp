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
              id = {recipe.id}
              name={recipe.name}
              author={recipe.author}
              tags={recipe.tags}
              />
          );
        })
      }
    </div>
  );
}

export default RecipeList;
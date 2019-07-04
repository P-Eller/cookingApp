import React from 'react';


const LayoutRecipeView = ({recipe}) => {

    return (
        <div>

            <h1>{recipe.name}</h1>
            <h1>{recipe.author}</h1>
            <h1>{recipe.ingredients}</h1>
            <h1>{recipe.preparation}</h1>
            <h1>{recipe.tags}</h1>

        </div>
    );
  }
  
export default LayoutRecipeView;
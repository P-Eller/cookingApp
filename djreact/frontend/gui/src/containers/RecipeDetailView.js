    
import React from "react";
import axios from "axios";
import LayoutRecipeView from '../components/LayoutRecipeView';


class RecipeDetailView extends React.Component {
  state = {
    recipe: {}
  };

  componentDidMount() {
    const recipeID = this.props.match.params.recipeID;

    axios.get(`http://127.0.0.1:8000/api/${recipeID}`).then(res => {
      this.setState({
        recipe: res.data
      });
    });

  }

  render() {
    const recipe = this.state.recipe;

    return !Object.entries(recipe).length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <LayoutRecipeView recipe={recipe} />
        
        </div>
      );
  }
}

export default RecipeDetailView;
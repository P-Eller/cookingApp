    
import React from "react";
import axios from "axios";
//import { connect } from "react-redux";


class RecipeDetailView extends React.Component {
  state = {
    recipe: {}
  };

  componentDidMount() {
    const recipeID = this.props.match.params.recipeID;
    console.log("reipeID",recipeID);
    axios.get(`http://127.0.0.1:8000/api/${recipeID}`).then(res => {
      this.setState({
        recipe: res.data
      });
      console.log("lalal",this.recipe)
    });
  }

  render() {
    console.log("lalala2",this.recipe);
    return(
        <div className='tc'>
          <h1>Hello World</h1>
        
        </div>
      );
  }
}

export default RecipeDetailView;
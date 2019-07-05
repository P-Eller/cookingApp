import React, { Component } from 'react';
import RecipeListView from './containers/RecipeListView';
import RecipeDetailView from './containers/RecipeDetailView';
import Header from './components/Header';
import TestText from './components/TestText';

import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return(
      <div>
        <h1 className='f1'>CookingBook</h1>
        <Router>
        <Header/>
          <Route exact path="/" component={RecipeListView} />{" "}
          <Route exact path="/about" component={TestText} />{" "}
          <Route exact path="/recipes/:recipeID/" component={RecipeDetailView} />{" "}
          <Route path="/" >Nothing here - incorrect Link</Route>{" "}
        </Router>
        
      </div>
      )
  }
}

export default App;
import React, { Component } from 'react';
import axios from "axios";
import SearchBox from '../components/SearchBox';
import FilterBar from '../components/FilterBar';
import RecipeList from '../components/RecipeList';

import TestText from '../components/TestText';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class RecipeListView extends Component {
constructor() {
super()
this.state = {
    recipes: [],
    searchfield: '',
    recipeFilter: []
}
}

fetchArticles = () => {
axios.get("http://127.0.0.1:8000/api/").then(res => {
    this.setState(
    { recipes: res.data }
    );
});
}

componentDidMount() {
this.fetchArticles();
console.log("mount",this.state);
}

onSearchChange = (event) => {
this.setState({ searchfield: event.target.value })
}

render() {

const { recipes, searchfield, recipeFilter } = this.state;
const filteredRecipes = recipes.filter(recipe =>{
    return recipe.name.toLowerCase().includes(searchfield.toLowerCase());
})
return !recipes.length ?
    <h1>Loading</h1> :
    (
    <div className='tc'>
        
        <Router>
        <Route path="/about" component={TestText}/>
        </Router>
        
        <SearchBox searchChange={this.onSearchChange}/>

        <div className="container">
        <div className="row">
            <div className="col-2">
            <FilterBar/>
            </div>
            <div className="col-10">
            
            <RecipeList recipes={filteredRecipes}/>
            
            </div>

        </div>
        </div>

        
    </div>
    );
}
}

export default RecipeListView;
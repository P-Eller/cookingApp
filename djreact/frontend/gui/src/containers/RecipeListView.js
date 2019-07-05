import React, { Component } from 'react';
import axios from "axios";
import SearchBox from '../components/SearchBox';
import FilterBar from '../components/FilterBar';
import RecipeList from '../components/RecipeList';

import TestText from '../components/TestText';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {recipeFilters} from '../recipeFilters'

class RecipeListView extends Component {
constructor() {
super()
this.state = {
    recipes: [],
    searchfield: '',
    filterBoxes:[],
    filters: []
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
}

onSearchChange = (event) => {
this.setState({ searchfield: event.target.value })
}


activeFilterBoxes = () => {
    
    let dummyFilterBoxes = [];
    recipeFilters.map((aFilter) => {
        let aFilterActive = false;
        this.state.filters.forEach(function (filter) {
            if (aFilter.options.includes(filter)){
                aFilterActive =true;            
            }
        });
        if (aFilterActive){
            dummyFilterBoxes.push(aFilter.name)
        }
    }) ;
    this.setState({ filterBoxes: dummyFilterBoxes })
    }

toggleCheckbox = (event) => {
    const checked = event.target.checked;
    const dummy = this.state.filters;
    if (checked) {
        dummy.push(event.target.value);
        this.setState({ filters: dummy });
    }
    if (!checked) {
        dummy.splice( dummy.indexOf(event.target.value), 1 );
    }
    this.activeFilterBoxes();
}


delByFilter = (tags) => {
    let delIt = false;
    const filBoxes= this.state.filterBoxes;
    const filters = this.state.filters;
    filBoxes.forEach(function (box) {
        delIt = true;
        const index = recipeFilters.map(e => e.name).indexOf(box);

        let checkedItems=[];
        recipeFilters[index].options.forEach(function (option) {
            if (filters.includes(option)){
                checkedItems.push(option);
            }
        })
        tags.forEach(function (tag) {
            if (checkedItems.includes(tag)){
                delIt=false;
            }          
        })       
    })
   // console.log('final',tags,delIt);
    return delIt

}

render() {

const { recipes, searchfield, filters } = this.state;
const searchFilterRecs = recipes.filter(recipe =>{
    return recipe.name.toLowerCase().includes(searchfield.toLowerCase());
});

let filteredRecipes =[];
searchFilterRecs.map((aRecipe,i) => {

    const tags = JSON.parse(aRecipe.tags.replace(/'/g,'"') );
    if (!this.delByFilter(tags)){
        filteredRecipes.push(aRecipe);
    }

});





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
            <FilterBar toggleCheckbox={this.toggleCheckbox}/>
            </div>
            <div className="col-10">
            
            <RecipeList recipes={filteredRecipes} />
            
            </div>

        </div>
        </div>

        
    </div>
    );
    
}
}

export default RecipeListView;
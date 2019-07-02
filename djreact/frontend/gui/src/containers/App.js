import React, { Component } from 'react';
import axios from "axios";
//import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import FilterBar from '../components/FilterBar';
import RecipeList from '../components/RecipeList';
//import {recipes} from '../recipes';
//import 'antd/dist/antd.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      recipes: [],
      searchfield: ''
    }
  }

  fetchArticles = () => {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState(
        { recipes: res.data },
        () =>{
              console.log("new",this.state.recipes);}
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
    console.log("render1",this.state);
    const { recipes, searchfield } = this.state;
    const filteredRecipes = recipes.filter(recipe =>{
      console.log("recipe",recipe)
      return recipe.title.toLowerCase().includes(searchfield.toLowerCase());
    })
    console.log("filtered",filteredRecipes);
    return !recipes.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>CookingBook</h1>
          
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

export default App;

/*
import CustomLayout from './containers/layout';
import ArticleList from './containers/ArticleListView';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      
      <ArticleList/>
      <CustomLayout>
      
      </CustomLayout>


    </div>
  );
}

export default App;
*/
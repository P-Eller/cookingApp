import React from "react";
import axios from "axios";
import Articles from "../components/Article";
//import CustomForm from "../components/Form";



class ArticleList extends React.Component {

  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/")
      .then(res => {
        this.setState({
          articles: res.data
        });
        console.log("type",typeof articles.tags);
    })
  }

  render() {
    return (
        <Articles data={this.state.articles}/>
    )
  }
}

export default ArticleList;
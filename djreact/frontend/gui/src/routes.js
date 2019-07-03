import React from "react";
import { BrowerRouter as Router, Route, Switch } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
//import ArticleDetail from "./containers/ArticleDetailView";


const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticleList} />{" "}
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />{" "}
  </div>
);

export default BaseRouter;

//<Route exact path="/login/" component={Login} />{" "}
//<Route exact path="/signup/" component={Signup} />{" "}
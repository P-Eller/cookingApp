import React from "react";
import { BrowerRouter as Router, Route, Switch } from "react-router-dom";

import ArticleListView from "./containers/ArticleListView";
import ArticleDetailView from "./containers/ArticleDetailView";


const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ArticleListView} />{" "}
    <Route exact path="/articles/:articleID/" component={ArticleDetailView} />{" "}
  </div>
);

export default BaseRouter;

//<Route exact path="/login/" component={Login} />{" "}
//<Route exact path="/signup/" component={Signup} />{" "}
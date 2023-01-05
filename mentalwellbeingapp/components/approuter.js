import React from "react";
import { Router, Redirect, Route, Switch, useLocation } from "react-router-dom";
import blog from "../pages/blog";
import chat from "../pages/chat";
import index from "../pages/index";
import quiz from "../pages/quiz";
import SingIn from "../pages/signIn";
import SignUp from "../pages/signUp";


const Approuter = () => {
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={SingIn} />
        <Route exact path="/blog" component={blog} />
        <Route exact path="/chat" component={chat} />
        <Route exact path="/quiz" component={quiz} />
      </Switch>
    </Router>
  </>
}

export default Approuter;

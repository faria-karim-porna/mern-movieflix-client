import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Movies from "./Components/Movies/Movies";
import AddAllData from "./Components/AddAllData/AddAllData";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { Modals } from "./Components/modals";

export function App(): JSX.Element {
  return (
    <> 
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/movies">
            <Movies></Movies>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addAllData">
            <AddAllData></AddAllData>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      {/* <Modals /> */}
    </>
  );
}

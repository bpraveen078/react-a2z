import React, { Component } from "react";
import { Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import { AddTodo } from "./components/add-todo";
import { TodoList } from "./components/todo-list";
import { history } from "../src/history/history";
import { PrivateRoute } from "./routes/private-route";
import Login from "./components/login";

class App extends React.Component {
  constructor(props) {
    super();
    history.listen(location => {
      debugger;
      // alert(JSON.stringify(location));
    });
  }
  // componentWillMount() {
  //   alert("App--componentWillMount");
  // }
  // componentDidMount() {
  //   alert("App--componentDidMount");
  // }
  // shouldComponentUpdate() {
  //   alert("App--shouldComponentUpdate");
  //   return true;
  // }
  // componentWillReceiveProps(props) {
  //   alert("App--componentWillReceiveProps");
  // }
  // componentWillUpdate() {
  //   alert("App--componentWillUpdate");
  // }
  // componentDidUpdate() {
  //   alert("App--componentDidUpdate");
  // }
  // componentWillUnmount() {
  //   alert("App--componentWillUnmount");
  // }
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <div>
              <ul className="ul-style-none">
                <li>
                  {/* <Route exact path="/todolist" component={TodoList} /> */}
                </li>
                <li>
                  <Link to="/login">Login</Link>&nbsp;
                  <Link to="/todolist">Task List</Link>&nbsp;
                  <Link to="/addtodo">Add Task</Link>&nbsp;
                  <Link to="/auth">Auth</Link>
                </li>
              </ul>
            </div>
            <div>
              <Switch>
                <PrivateRoute exact path="/auth" component={TodoList} />
                <Route exact path="/" component={TodoList} />
                <Route exact path="/todolist" component={TodoList} />
                <Route exact path="/addtodo" component={AddTodo} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

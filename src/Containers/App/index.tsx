import React from "react";
import { Switch, Route, Redirect } from "react-router";
// Style
import "./App.scss";
// Containers
import Team from "../Team";

interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Switch>
        <Route exact path="/team" component={Team} />
        <Redirect to="/team" />
      </Switch>
    );
  }
}

export default App;

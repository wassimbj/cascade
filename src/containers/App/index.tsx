import React from "react";
import { Redirect, Route, Switch } from "react-router";
// Containers
import Event from "../Event";
import Hackathon from "../Hackathon";
import Navigation from "../Navigation";
import OpenSource from "../OpenSource";
import People from "../People";
import Talk from "../Talk";
// Style
import "./App.scss";

interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <React.Fragment>
        <Navigation
          title="LoginRadius Engineering"
          sections={[
            { name: "People", link: "/people" },
            { name: "Event", link: "/event" },
            { name: "Talk", link: "/talk" },
            { name: "Hackathon", link: "/hackathon" },
            { name: "Open Source", link: "/opensource" }
          ]}
        />
        <Switch>
          <Route exact path="/people" component={People} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/talk" component={Talk} />
          <Route exact path="/hackathon" component={Hackathon} />
          <Route exact path="/opensource" component={OpenSource} />
          <Redirect to="/people" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

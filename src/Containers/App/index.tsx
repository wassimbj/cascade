import React from "react";
import { Switch, Route, Redirect } from "react-router";
// Style
import "./App.scss";
// Containers
import Team from "../Team";
import Event from "../Event";
import Talk from "../Talk";
import Hackathon from "../Hackathon";
import OpenSource from "../OpenSource";
import Navigation from "../Navigation";

interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <React.Fragment>
        <Navigation
          title="LoginRadius Engineering"
          sections={[
            { name: "Team", link: "/team" },
            { name: "Event", link: "/event" },
            { name: "Talk", link: "/talk" },
            { name: "Hackathon", link: "/hackathon" },
            { name: "Open Source", link: "/opensource" }
          ]}
        />
        <Switch>
          <Route exact path="/team" component={Team} />
          <Route exact path="/event" component={Event} />
          <Route exact path="/talk" component={Talk} />
          <Route exact path="/hackathon" component={Hackathon} />
          <Route exact path="/opensource" component={OpenSource} />
          <Redirect to="/team" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

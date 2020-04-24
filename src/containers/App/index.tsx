import React from "react";
import { Redirect, Route, Switch } from "react-router";
// Style
import "./App.scss";
// Containers
import Navigation from "../Navigation";
const Event = React.lazy(() => import("../Event"));
const Hackathon = React.lazy(() => import("../Hackathon"));
const OpenSource = React.lazy(() => import("../OpenSource"));
const People = React.lazy(() => import("../People"));
const Talk = React.lazy(() => import("../Talks"));

interface AppProps {}
interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    const fallback = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%"
        }}
      >
        Please wait...
      </div>
    );

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
          <Route
            exact
            path="/people"
            render={() => (
              <React.Suspense fallback={fallback}>
                <People />
              </React.Suspense>
            )}
          />
          <Route
            exact
            path="/event"
            render={() => (
              <React.Suspense fallback={fallback}>
                <Event />
              </React.Suspense>
            )}
          />
          <Route
            exact
            path="/talk"
            render={() => (
              <React.Suspense fallback={fallback}>
                <Talk />
              </React.Suspense>
            )}
          />
          <Route
            exact
            path="/hackathon"
            render={() => (
              <React.Suspense fallback={fallback}>
                <Hackathon />
              </React.Suspense>
            )}
          />
          <Route
            exact
            path="/opensource"
            render={() => (
              <React.Suspense fallback={fallback}>
                <OpenSource />
              </React.Suspense>
            )}
          />
          <Redirect to="/people" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

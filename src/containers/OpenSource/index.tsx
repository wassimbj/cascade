import React from "react";
import { openSource } from "../../constants/openSourceData";
import "./OpenSource.scss";
import OpenSourceCard from "../../components/OpenSourceCard";

//! END

interface AppProps {}
interface AppState {}

class OpenSource extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Open Source </h2>
            <p className="text-center">
              List of Contributers who had there contributions for the open
              source projects
            </p>
          </div>
          <div className="row people mt-4">
            {openSource.map(
              (os, index) =>
                <OpenSourceCard {...os} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default OpenSource;

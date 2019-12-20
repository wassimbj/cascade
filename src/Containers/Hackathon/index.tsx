import React from "react";
import "./Hackathon.scss";

interface AppProps {}
interface AppState {}

class Hackathon extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Hackathons </h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              recusandae aut tempora ipsam eligendi dignissimos, omnis iste
              quidem possimus totam alias ratione nesciunt excepturi, sint
              accusamus. Beatae quisquam exercitationem ab.
            </p>
          </div>
          {/* Hackathons to be added */}
        </div>
      </div>
    );
  }
}

export default Hackathon;

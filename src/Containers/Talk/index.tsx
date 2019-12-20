import React from "react";
import "./Talk.scss";

interface AppProps {}
interface AppState {}

class Talk extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Talks </h2>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias eligendi distinctio necessitatibus consequatur
              blanditiis odio eius doloremque, itaque eveniet ducimus
              accusantium reiciendis quia ex facilis voluptatem quod nobis,
              tempore iure!
            </p>
          </div>
          {/* To be added */}
        </div>
      </div>
    );
  }
}

export default Talk;

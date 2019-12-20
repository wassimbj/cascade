import React from "react";
import "./Event.scss";

interface AppProps {}
interface AppState {}

class Event extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Events </h2>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
              totam non ratione culpa accusamus, eos perferendis. Eum cumque
              laborum inventore enim est beatae sunt! Omnis veniam eligendi
              quasi libero nobis!
            </p>
          </div>
          {/* Event section to be added */}
        </div>
      </div>
    );
  }
}

export default Event;

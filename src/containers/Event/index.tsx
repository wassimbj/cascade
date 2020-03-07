import React from "react";
import "./Event.scss";
import { events } from "../../constants/data";
import EventCard from "../../components/EventCard";

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
              The list of amazing events which are going to happend in
              loginradius. You will find the list below.
            </p>
          </div>
          <div className="row people">
            {events.map((eve, index) => (
              <EventCard {...eve} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Event;

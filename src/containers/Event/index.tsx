import React from "react";
import "./Event.scss";
import { events } from "../../constants/eventData";
import EventCard from "../../components/EventCard";

interface EventProps {}
interface EventState {
  category: "TOATTEND" | "TOHOST";
}

class Event extends React.Component<EventProps, EventState> {
  constructor(props: EventProps) {
    super(props);
    this.state = {
      category: "TOHOST",
    };
  }
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
          <div className="tab-buttons d-flex">
            <div
              className="t-btn"
              style={{
                backgroundColor: `${
                  this.state.category === "TOHOST" ? "#333" : "#ccc"
                }`,
              }}
              onClick={() => this.setState({ category: "TOHOST" })}
            >
              To Host
            </div>
            <div
              className="t-btn"
              style={{
                backgroundColor: `${
                  this.state.category === "TOATTEND" ? "#333" : "#ccc"
                }`,
              }}
              onClick={() => this.setState({ category: "TOATTEND" })}
            >
              To Attend
            </div>
          </div>
          <div className="row people">
            {events.map(
              (eve, index) =>
                eve.Category === this.state.category && <EventCard {...eve} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Event;

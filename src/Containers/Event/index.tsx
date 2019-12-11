import React from "react";

import "./Event.scss";

//! To be removed
import { events, tags } from "../../constants/data";
//! END
import UserCard from "../../components/UserCard";
import Categories from "../../components/Categories";

interface AppProps {}
interface AppState {
  activeTeam: string;
}

class Event extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      activeTeam: "All"
    };
  }

  render() {
    const { activeTeam } = this.state;

    return (
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Events </h2>
            <p className="text-center">
              Meet our elegant team who continously keep improving the product
              quality and ofcourse hold the fort down!
            </p>
          </div>
          <Categories
            names={tags}
            onClick={name => this.setState({ activeTeam: name })}
            active={activeTeam}
          />
          <div className="row people">
            {events.map((event, index) => {
              return activeTeam === "All" ||
                event.category.indexOf(activeTeam) !== -1 ? (
                <UserCard key={index.toString()} {...event} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Event;

import React from "react";

import "./Team.scss";

//! To be removed
import { people, categories } from "../../constants/data";
//! END
import UserCard from "../../components/UserCard";
import Categories from "../../components/Categories";

interface AppProps {}
interface AppState {
  activeTeam: string;
}

class Team extends React.Component<AppProps, AppState> {
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
            <h2 className="text-center">Team </h2>
            <p className="text-center">
              Meet our elegant team who continously keep improving the product
              quality and ofcourse hold the fort down!
            </p>
          </div>
          <Categories
            names={categories}
            onClick={name => this.setState({ activeTeam: name })}
            active={activeTeam}
          />
          <div className="row people">
            {people.map((peep, index) => {
              return activeTeam === "All" || peep.Category === activeTeam ? (
                <UserCard key={index.toString()} {...peep} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;

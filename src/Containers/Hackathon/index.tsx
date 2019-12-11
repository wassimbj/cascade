import React from "react";

import "./Hackathon.scss";

//! To be removed
import { hackathons } from "../../constants/data";
//! END
import UserCard from "../../components/UserCard";
import Categories from "../../components/Categories";

interface AppProps {}
interface AppState {
  activeTeam: string;
}

class Hackathon extends React.Component<AppProps, AppState> {
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
            names={["All", "Engineering", "DevOps", "QA", "Marketing"]}
            onClick={name => this.setState({ activeTeam: name })}
            active={activeTeam}
          />
          <div className="row people">
            {hackathons.map((hac, index) => {
              return activeTeam === "All" ||
              hac.category.indexOf(activeTeam) !== -1 ? (
                <UserCard key={index.toString()} {...hac} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Hackathon;

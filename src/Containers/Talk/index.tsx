import React from "react";

import "./Talk.scss";

//! To be removed
import { talks } from "../../constants/data";
//! END
import UserCard from "../../components/UserCard";
import Categories from "../../components/Categories";

interface AppProps {}
interface AppState {
  activeTeam: string;
}

class Talk extends React.Component<AppProps, AppState> {
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
            {talks.map((talk, index) => {
              return activeTeam === "All" ||
              talk.category.indexOf(activeTeam) !== -1 ? (
                <UserCard key={index.toString()} {...talk} />
              ) : null;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Talk;

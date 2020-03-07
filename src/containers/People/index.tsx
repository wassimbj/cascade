import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Categories from "../../components/Categories";
import UserCard from "../../components/UserCard";
import { categories, people } from "../../constants/data";
import "./Team.scss";
import qs from "qs";

interface PeopleProps extends RouteComponentProps {}
interface PeopleState {
  activeTeam: string;
  activeTag?: string;
}

class People extends React.Component<PeopleProps, PeopleState> {
  constructor(props: PeopleProps) {
    super(props);
    const query = qs.parse(props.location.search, { ignoreQueryPrefix: true });

    this.state = {
      activeTeam: ["All", ...categories].includes(query.cat) ? query.cat : "All"
    };

    if (query.cat === undefined) {
      props.history.push("?cat=All");
    }
  }

  render() {
    const { activeTeam } = this.state;

    return (
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">People </h2>
            <p className="text-center">
              This is our team, who help you bring a delighful user experience!
            </p>
          </div>
          <Categories
            names={categories}
            onClick={name => {
              this.setState({ activeTeam: name });
              this.props.history.push(`?cat=${name}`);
            }}
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

export default withRouter(People);

import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Categories from "../../components/Categories";
import UserCard from "../../components/UserCard";
import { categories, people } from "../../constants/data";
import { parseQueryParams } from "../../utils";
import "./Team.scss";

interface PeopleProps extends RouteComponentProps {}
interface PeopleState {
  activeTeam: string;
  activeTag?: string;
}

class People extends React.Component<PeopleProps, PeopleState> {
  constructor(props: PeopleProps) {
    super(props);
    this.state = {
      activeTeam: "All"
    };
  }

  // Vars
  private _unregisterHistoryListener: any;

  // Life-cycle
  componentDidMount() {
    this._onUrlChange(window.location);

    this._unregisterHistoryListener = this.props.history.listen(
      this._onUrlChange
    );
  }
  componentWillUnmount() {
    if (this._unregisterHistoryListener) {
      this._unregisterHistoryListener();
    }
  }

  // Event Listeners
  _onUrlChange = (location: any) => {
    const query = parseQueryParams(location.search);
    if (query.has("expert")) {
      this.setState({ activeTag: query.get("expert") });
    }
  };

  render() {
    const { activeTeam, activeTag } = this.state;

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
            onClick={name => this.setState({ activeTeam: name })}
            active={activeTeam}
          />
          <div className="row people">
            {people.map((peep, index) => {
              return activeTag !== undefined ? (
                peep.Expertat.replace(/\s/g, "")
                  .toLowerCase()
                  .indexOf(activeTag) !== -1 ? (
                  <UserCard key={index.toString()} {...peep} />
                ) : null
              ) : activeTeam === "All" || peep.Category === activeTeam ? (
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

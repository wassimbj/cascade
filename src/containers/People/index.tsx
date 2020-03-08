import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import UserCard from "../../components/UserCard";
import { people, PeopleSchema } from "../../constants/data";
import "./Team.scss";

interface PeopleProps extends RouteComponentProps {}
interface PeopleState {}

class People extends React.Component<PeopleProps, PeopleState> {
  constructor(props: PeopleProps) {
    super(props);
    this.state = {};
  }

  private _getPeopleCategory = (people: PeopleSchema[]) => {
    const cat: Map<string, PeopleSchema[]> = new Map();
    people.forEach(peep => {
      const catName = /Engineer/g.test(peep.Category)
        ? "Engineering"
        : /(?:Director|Analyst)/g.test(peep.Category)
        ? "Product Management"
        : peep.Category;
      const current = cat.get(catName);
      cat.set(catName, current ? [...current, peep] : [peep]);
    });

    return cat;
  };

  render() {
    const peopleCat = this._getPeopleCategory(people);

    return (
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <h1 className="text-center">People </h1>
            <p className="text-center">
              This is our team, who help you bring a delighful user experience!
            </p>
          </div>

          {Array.from(peopleCat.keys()).map((category, catIndex) => {
            return (
              <div className="teams mt-5" key={catIndex}>
                <h1 className="text-left">{category}</h1>
                <div className="row">
                  {(peopleCat.get(category) || []).map((peep, index) => {
                    return (
                      <UserCard key={index} {...peep} onClick={console.log} />
                    );
                  })}
                </div>
                <div className="divider"></div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(People);

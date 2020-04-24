import React from "react";
import { talkData, categories } from "../../constants/talkData";
import "./Talks.scss";
import TalkCard  from "../../components/TalksCard";

interface TalksProps {}
interface TalksState {
  category: string;
}

class Talks extends React.Component<TalksProps, TalksState> {
  constructor(props: TalksProps) {
    super(props);
    this.state = {
      category: "Engineering",
    };
  }
  render() {
    return (
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Talks </h2>
            <p className="text-center">
              Find the List of Great Talks given by out team.
            </p>
          </div>
          <div className="tab-buttons d-flex">
            {categories.map((category) => (
              <div
                className="t-btn"
                style={{
                  backgroundColor: `${
                    this.state.category === category ? "#333" : "#ccc"
                  }`,
                }}
                onClick={() => this.setState({ category })}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="row people">
            {talkData.map((talk, index) => (
              talk.Category === this.state.category && <TalkCard {...talk} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Talks;

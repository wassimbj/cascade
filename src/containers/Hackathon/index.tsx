import React from "react";
import { hackathons } from "../../constants/hackathonData";
import "./Hackathon.scss";
import HackathonCard, {
  HackathonCardProps,
} from "../../components/HackathonCard";

interface HackathonProps {}
interface HackathonState {
  status: "ALL" | "TODO" | "INPROGRESS" | "DONE";
}

class Hackathon extends React.Component<HackathonProps, HackathonState> {
  constructor(props: HackathonCardProps) {
    super(props);
    this.state = {
      status: "ALL",
    };
  }
  render() {
    return (
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Hackathons </h2>
            <p className="text-center">
              Find the list of the exciting hackathons happening around the
              organization.
            </p>
          </div>
          <div className="tab-buttons d-flex">
            {["ALL", "DONE", "INPROGRESS", "TODO" ].map((status: any) => (
              <div
                className="t-btn"
                style={{
                  backgroundColor: `${
                    this.state.status === status ? "#333" : "#ccc"
                  }`,
                }}
                onClick={() => this.setState({ status })}
              >
                {status}
              </div>
            ))}
          </div>
          <div className="row people">
            {hackathons.map(
              (hac, index) =>
                (this.state.status === "ALL" ||
                  hac.Status === this.state.status) && (
                  <HackathonCard {...hac} />
                )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Hackathon;

import React from "react";
import hacIcon from "../assets/images/hackathon.svg";
import { HacathonSchema } from "../constants/hackathonData";
export interface HackathonCardProps extends HacathonSchema {}

const HackathonCard: React.SFC<HackathonCardProps> = (props) => {
  return (
    <div className="col-md-6 col-lg-4 item">
      <div className="box mt-4">
        <h3 className="name">{props.ProjectName}</h3>
        <img className="icon" src={hacIcon} alt="tal-icon" />
        <strong>
          <p>{`Dt: ${props.StartDate}`}</p>
        </strong>
        <h5>
          <u>{"Participants"}</u>
        </h5>
        <div className="speakers d-flex">
          {props.Participants.map((press, index) => (
            <div key={index} className="column m-2 d-flex flex-column">
              <img
                className="rounded-circle text-center m-auto"
                src={
                  press.Thumbnail ||
                  `https://ui-avatars.com/api/?name=${press.Name}&size=460`
                }
                alt={press.Name}
              />
              <span>{press.Name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;

import icon from "../assets/images/speaking.svg";
import React from "react";
import { TalkSchema } from "../constants/talkData";

export interface TalkCardProps extends TalkSchema {}

const TalkCard: React.SFC<TalkCardProps> = ({ ...props }) => {
  return (
    <div className="col-md-6 col-lg-4 item">
      <div className="box">
        <h3 className="name">{props.Topic}</h3>
        <p className="title">{props.Place}</p>
        <img src={icon} alt="tal-icon" />
        <div className="register">
          <a href={props.PPTLink} target="blank" className="btn btn-common">
            PPT Link
          </a>
        </div>
        <strong>
          <p>{`Dt: ${props.Date}`}</p>
        </strong>
        <h5>
          <u>{"Our Speakers"}</u>
        </h5>
        <div className="speakers d-flex">
          {props.Presenter.split("/").map((press, index) => (
            <div key={index} className="column m-2 d-flex flex-column">
              <img
                className="rounded-circle text-center m-auto"
                src={`https://ui-avatars.com/api/?name=${press}&size=460`}
                alt={press}
              />
              <span>{press}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalkCard;

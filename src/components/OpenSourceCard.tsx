import React from "react";
import { OpenSourceSchema } from "../constants/openSourceData";
export interface OpenSourceCardProps extends OpenSourceSchema {}

const OpenSourceCard: React.SFC<OpenSourceCardProps> = (props) => {
  return (
    <div className="col-md-6 col-lg-4 item">
      <div className="box">
        <div className="column m-2 d-flex flex-column">
          <div className="star ml-auto">
          <i className="fa fa-star"></i>
            <span> {props.Stars}</span>
          </div>
          <img
            className="rounded-circle text-center m-auto"
            src={`https://github.com/${props.GitUsername}.png`}
            alt={props.GitUsername}
          />
          <h3>{props.GitUsername}</h3>
          <p className="title">{props.Language}</p>
          <div className="register">
            <a
              href={props.GitRepoURL}
              target="blank"
              className="btn btn-common"
            >
              Repo URL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceCard;

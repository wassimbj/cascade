import * as React from "react";

export interface UserCardProps {
  name: string;
  position: string;
  social: {
    name: string;
    url: string;
  }[];
  thumbnail: string;
}

const UserCard: React.FC<UserCardProps> = props => {
  return (
    <div className="col-md-6 col-lg-4 item">
      <div className="box">
        <img
          className="rounded-circle"
          src={props.thumbnail}
          alt={props.name}
        />
        <h3 className="name">{props.name}</h3>
        <p className="title">{props.position}</p>
        <p className="description">
          Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
        </p>
        <div className="social">
          {props.social.map((soc, index2) => {
            const icon =
              soc.name === "facebook" ? "facebook-official" : soc.name;
            return (
              <a href={soc.url} target="_blank" rel="noopener noreferrer">
                <i className={`fa fa-${icon}`}></i>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserCard;

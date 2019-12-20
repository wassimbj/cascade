import * as React from "react";
import { People } from "../constants/data";
import { Link } from "react-router-dom";

export interface UserCardProps extends People {}

const UserCard: React.FC<UserCardProps> = props => {
  const social = [];
  if (props.GithubURL) {
    social.push({ name: "github", url: props.GithubURL, icon: "github" });
  }
  if (props.Medium) {
    social.push({ name: "medium", url: props.Medium, icon: "medium" });
  }
  if (props.PersonalBlogURL) {
    social.push({ name: "blog", url: props.PersonalBlogURL, icon: "user" });
  }
  if (props.PersonalWebsite) {
    social.push({
      name: "website",
      url: props.PersonalWebsite,
      icon: "portrait"
    });
  }
  if (props.StackOverFlow) {
    social.push({
      name: "stack-overflow",
      url: props.StackOverFlow,
      icon: "stack-overflow"
    });
  }

  return (
    <div className="col-md-6 col-lg-4 item">
      <div className="box">
        <img
          className="rounded-circle"
          src={
            props.Thumbnail ||
            `https://ui-avatars.com/api/?name=${props.Name}&size=460`
          }
          alt={props.Name}
        />
        <h3 className="name">{props.Name}</h3>
        <p className="title">{props.Category}</p>
        <p className="description">
          {props.Expertat && (
            <>
              <h6>Expert at</h6>
              <p className="tags">{stringToTags(props.Expertat, "expert")}</p>
            </>
          )}

          {props.CanWorkOn && (
            <>
              <h6>Good at</h6>
              <p className="tags">
                {stringToTags(props.CanWorkOn, "interest")}
              </p>
            </>
          )}

          {props.Hobbies && (
            <>
              <h6>Hobbies</h6>
              <p className="tags">{stringToTags(props.Hobbies, "hobby")}</p>
            </>
          )}
          <hr />
          {
            <Link className="location-link" to={`?location=${props.Location}`}>
              {props.Location}
            </Link>
          }
        </p>
        <div className="social">
          {social.map((soc, index) => {
            return (
              <a
                key={index.toString()}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fa fa-${soc.icon}`}></i>
                <p style={{ fontSize: "0.8em" }}>{soc.name}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

function stringToTags(str: string, tagType?: string) {
  return str.split(",").map((e, i) => {
    const tag = e.replace(/\s/g, "").toLowerCase();
    return (
      <Link
        className="tag-link"
        key={"tag_" + i.toString()}
        to={`?${tagType || "tag"}=${tag}`}
      >{`#${tag}`}</Link>
    );
  });
}

export default UserCard;

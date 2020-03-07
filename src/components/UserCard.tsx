import * as React from "react";
import { PeopleSchema } from "../constants/data";
import { Image, Popup } from "semantic-ui-react";

export interface UserCardProps extends PeopleSchema {
  onClick?: (people: PeopleSchema) => void;
}
const UserCard: React.FC<UserCardProps> = ({ onClick, ...props }) => {
  const social = getSocialInfo(props);

  return (
    <Popup
      content={props.Expertat ? "Expert at " + props.Expertat : ""}
      header={props.Name}
      trigger={
        <Image
          src={
            props.Thumbnail ||
            `https://ui-avatars.com/api/?name=${props.Name}&size=460`
          }
          avatar
          size="tiny"
          onClick={() => onClick && onClick(props)}
          className="m-2"
          style={{ cursor: "pointer" }}
        />
      }
    />
    // <div className="user-heads">
    //   <img
    //     className="rounded-circle headshots"
    //     src={
    //   props.Thumbnail ||
    //   `https://ui-avatars.com/api/?name=${props.Name}&size=460`
    // }
    //     alt={props.Name}
    //     title={props.Name}
    //   />
    // </div>
    // <div className="col-md-6 col-lg-4 item">
    //   <div className="box">
    //     <img
    //       className="rounded-circle"
    //       src={
    //         props.Thumbnail ||
    //         `https://ui-avatars.com/api/?name=${props.Name}&size=460`
    //       }
    //       alt={props.Name}
    //     />
    //     <h3 className="name">{props.Name}</h3>
    //     <div className="title">{props.Category}</div>
    //     <div className="social mt-4">
    //       {social.map((soc, index) => {
    //         return (
    //           <a
    //             key={index.toString()}
    //             href={soc.url}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <i className={`fa fa-${soc.icon}`}></i>
    //           </a>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

function getSocialInfo(props: PeopleSchema) {
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
  return social;
}

export default UserCard;

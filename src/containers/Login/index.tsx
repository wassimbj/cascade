import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import config from "../../utils/config";

export interface LoginProps extends RouteComponentProps {}

const Login: React.SFC<LoginProps> = ({ history }) => {
  let token = parseQueryParams(history.location.search);
  if (token) {
    localStorage.setItem("token", token);
    history.push("/people");
  } else {
    const url = `${config.APP_URL}/auth.aspx?return_url=${window.location.origin}/login`;
    window.location.href = url;
  }
  return null;
};

const parseQueryParams = (queryString: string) => {
  const qsToArray = queryString.substr(1).split("&"); // Array of key values with = delimeter
  let query = qsToArray[0].split("=");
  if (query && query[0] === "token") {
    return query[1];
  } else {
    return null;
  }
};

export default withRouter(Login);

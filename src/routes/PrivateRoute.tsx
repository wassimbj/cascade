import React from "react";
import { withRouter, RouteComponentProps, Route } from "react-router-dom";

export interface PrivateRouteProps extends RouteComponentProps {
  [key: string]: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...props }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...props}
      render={(props) => {
        if (token) {
          return children;
        } else {
          const url = `https://dev-home.devhub.lrinternal.com/auth.aspx?return_url=${window.location.origin}/login`;
          window.location.href = url;
        }
      }}
    />
  );
};

export default withRouter(PrivateRoute);

import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link, NavLink, withRouter } from "react-router-dom";
import "./Navigation.scss";

export interface NavigationProps extends RouteComponentProps {
  title: string;
  sections: {
    name: string;
    link: string;
  }[];
}
export interface NavigationState {}

class Navigation extends React.Component<NavigationProps, NavigationState> {
  render() {
    return (
      <div>
        <div className="header-dark">
          <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
            <div className="container">
              <Link className="navbar-brand" to="/">
                {this.props.title}
              </Link>
              <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navcol-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav">
                  {this.props.sections.map((section, index) => {
                    return (
                      <li
                        key={index.toString()}
                        className="nav-item"
                        role="presentation"
                      >
                        <NavLink
                          className={
                            "nav-link" +
                            (this.props.location.pathname === section.link
                              ? " active"
                              : "")
                          }
                          to={section.link}
                        >
                          {section.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);

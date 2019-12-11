import * as React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

export interface NavigationProps {
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
                  {this.props.sections.map(section => {
                    return (
                      <li className="nav-item" role="presentation">
                        <Link className="nav-link" to={section.link}>
                          {section.name}
                        </Link>
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

export default Navigation;

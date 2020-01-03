import React from "react";
import "./OpenSource.scss";

//! END

interface AppProps {}
interface AppState {}

class OpenSource extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="team-boxed">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Open Source </h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              adipisci ab nobis id quia a debitis, veniam numquam, ipsum iure
              accusantium voluptatem commodi necessitatibus repudiandae
              blanditiis consectetur. Aut, voluptatibus necessitatibus!
            </p>
          </div>
          {/* OpenSource to be added */}
        </div>
      </div>
    );
  }
}

export default OpenSource;

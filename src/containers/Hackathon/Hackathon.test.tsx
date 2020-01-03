import React from "react";
import ReactDOM from "react-dom";
import Hackathon from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Hackathon />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from "react";

import "./App.scss";
import { people } from "../../config/constants";
import UserCard from "../../components/UserCard";

const App: React.FC = () => {
  return (
    <div className="team-boxed">
      <div className="container">
        <div className="intro">
          <h2 className="text-center">Team </h2>
          <p className="text-center">
            Meet our elegant team who continously keep improving the product
            quality and ofcourse hold the fort down!
          </p>
        </div>
        <div className="row people">
          {people.map((peep, index) => {
            return <UserCard key={index.toString()} {...peep} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

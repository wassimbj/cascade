import * as React from "react";

export interface CategoriesProps {
  names: string[];
  active?: string;
  onClick?: (name: string) => void;
}

const Categories: React.SFC<CategoriesProps> = props => {
  return (
    <div
      className="row m-4"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      {props.names.map((name, index) => {
        return (
          <button
            key={index.toString()}
            style={{ width: "170px" }}
            className={`btn ${
              name === props.active ? "btn-primary" : "btn-ghost"
            }`}
            onClick={() => (props.onClick ? props.onClick(name) : null)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

import * as React from "react";

export interface CategoriesProps {
  names: string[];
  active?: string;
  onClick?: (name: string) => void;
}

const Categories: React.SFC<CategoriesProps> = props => {
  return (
    <div className="categories">
      {props.names.map((name, index) => {
        return (
          <button
            key={index.toString()}
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

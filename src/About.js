import React from "react";
import "./Favourite.scss";
import "./Category.scss";

const arr1 = [
  "orange",
  "banana",
  "strwberry",
  "orange",
  "banana",
  "strwberry",
  "orange",
  "banana",
  "strwberry",
  "orange",
  "banana",
  "orange",
  "banana",
  "strwberry",
  "orange",
  "banana","orange",
  "banana",
  "strwberry",
  "orange",
  "banana","orange",
  "banana",
  "strwberry",
  "orange",
  "banana","orange",
  "banana",
  "strwberry",
  "orange",
  "banana",
];

export default function About() {
  return (
    <div className = "list-container">
      <div className="favourite-items-container">
        <div className="favourite-items-content">
          {arr1.map((item) => (
            <div className="card-container">{item}</div>
          ))}
        </div>
      </div>


      <div className="categories-items-container">
        <div className="categories-conatiner">
          {arr1.map((item) => (
            <div className="card-container">{item}</div>
          ))}
        </div>
      </div>

    </div>
  );
}

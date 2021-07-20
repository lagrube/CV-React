import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-database"></i>
          <span>Informatique</span>
        </li>
        <li className="hobby">
          <i className="fas fa-dog"></i>
          <span>Animaux</span>
        </li>
        <li>
          <i className="fas fa-running"></i>
          <span>Sports - Tennis</span>
        </li>
        <li>
          <i className="fab fa-pagelines"></i>
          <span>Nature</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;

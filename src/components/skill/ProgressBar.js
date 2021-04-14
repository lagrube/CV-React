import React from "react";

const ProgressBar = (props) => {
  console.log(props);
  return (
    <div>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Niveau :</span>
        <span>Acquis</span>
        <span>Maitrisé</span>
      </div>

      <div>
        {props.languages.map((item) => {
          let xpYears = 2;
          let progressBar = (item.xp / xpYears) * 100 + "%";

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;

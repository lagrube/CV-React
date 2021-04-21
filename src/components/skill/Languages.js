import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Sass", xp: 2 },
      { id: 2, value: "Javascript", xp: 1.8 },
      { id: 3, value: "MongoDB", xp: 1.4 },
      { id: 4, value: "Mysql", xp: 1.2 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1.6 },
      { id: 2, value: "Vue-js", xp: 1.03 },
      { id: 3, value: "Express", xp: 1.4 },
      { id: 4, value: "NodeJs", xp: 1.4 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;

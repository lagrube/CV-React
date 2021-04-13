import React from "react";
import Navigation from "../components/Navigation";
import Hobbies from "../components/skill/Hobbies";
import Languages from "../components/skill/Languages";
import OtherSkill from "../components/skill/OtherSkill";
import Experiences from "../components/skill/Experiences";

const Skill = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experiences />
        <Hobbies />
        <OtherSkill />
      </div>
    </div>
  );
};

export default Skill;

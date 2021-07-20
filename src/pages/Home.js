import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Navigation />
        <div className="homeContent">
          <div className="content">
            <h2>Developpeur web</h2>
            <div className="pdf">
              <a
                href={`${process.env.PUBLIC_URL}/img/CV-DevWeb.pdf`}
                target="blank"
              >
                Telecharger CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

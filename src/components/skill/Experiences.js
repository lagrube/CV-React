import React from "react";

const Experiences = () => {
  return (
    <div className="experience">
      <h3>Expériences</h3>
      <div className="exp-1">
        <h4>STAPS -Licence</h4>
        <h6>2014</h6>
      </div>
      <div className="exp-2">
        <h4>Chef d'équipe -Fauche</h4>
        <h6>2014-2019</h6>
        <p>Technicien électricien</p>
      </div>
      <div className="exp-3">
        <h4>Developpeur Web</h4>
        <h5>Bac +2 -OpenClassrooms 2021</h5>
        <h6>2019-Now</h6>
        <p>
          Retrouvez mes projets OpenClassrooms :<br />
          <a
            href="https://lagrube.github.io/Reservia-P2-HTML-CSS/"
            target="_blank"
            without
            rel="noreferrer"
          >
            - Intégration web
          </a>
          <br />
          <a
            href="https://lagrube.github.io/OhMyFood-P3-CSS-avance/"
            target="_blank"
            without
            rel="noreferrer"
          >
            - Animation CSS
          </a>
          <br />- SEO, Accessibilité :{" "}
          <a
            href="https://lagrube.github.io/LaChouetteAgence-P4-avant-modif/"
            target="_blank"
            without
            rel="noreferrer"
          >
            Avant
          </a>{" "}
          /{" "}
          <a
            href="https://lagrube.github.io/LaChouetteAgence-P4-SEO-Accessibilite/"
            target="_blank"
            without
            rel="noreferrer"
          >
            {" "}
            Après
          </a>
          <br />
          <a
            href="https://github.com/lagrube/Orinoco-P5-JS-frontend"
            target="_blank"
            without
            rel="noreferrer"
          >
            - Frontend Javascript
          </a>
          <br />
          <a
            href="https://github.com/lagrube/So-Peckocko-P6-backend"
            target="_blank"
            without
            rel="noreferrer"
          >
            - Backend NodeJs Express MongoDb
          </a>
          <br />
          <a
            href="https://github.com/lagrube/P7-FullStack-Groupomania"
            target="_blank"
            without
            rel="noreferrer"
          >
            - FullStack VueJs Mysql
          </a>
          <br />
          Ainsi que mes projets perso :{" "}
          <a
            href="https://github.com/lagrube/Portfolio-react"
            target="_blank"
            without
            rel="noreferrer"
          >
            ici
          </a>
        </p>
      </div>
    </div>
  );
};

export default Experiences;

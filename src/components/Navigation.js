import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img
            src={`${process.env.PUBLIC_URL}/img/photo-profil.jpeg`}
            alt="profil"
          />
          <h3>Gruber Guillaume</h3>
          <p>27 ans</p>
          <h4>
            <a
              href="https://github.com/lagrube/Portfolio-react"
              target="_blank"
              without
              rel="noreferrer"
            >
              Portfolio
            </a>
          </h4>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/compétences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/guillaume-gruber-9a78a91b9/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/lagrube">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <div className="signature">Guillaume - 2021</div>
      </div>
    </div>
  );
};

export default Navigation;

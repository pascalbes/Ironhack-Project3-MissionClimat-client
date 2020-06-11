import React from "react";
import { Link } from "react-router-dom";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import Footer from "components/partials/Footer";
import Header from "components/partials/Header";

import "styles/home.css";
import "styles/footer.css";

const Home = () => {
  return (
    <div className="home-page flex-item flex-column">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mission Climat</title>
        <meta
          name="description"
          content="Votre mission, si vous l'acceptez, est de proposer un scénario climat 2030 pour la France, permettant de limiter les impacts du dérèglement climatique à un niveau soutenable."
        />
        <link rel="canonical" href="http://mission-climat.io/" />
      </Helmet>
      <Header />
      <article className="hero-landing flex-item flex-column">
        <div className="hidden"></div>
        <div className="hero-box flex-item">
          <div className="hero-left">
            <h1 className="border">
              <span className="hero-mission">mission</span>
              <br />
              <span className="hero-temp">Climat</span>
            </h1>
            <p className="hero-text light-text">
              Votre mission, si vous l'acceptez, est de proposer un scénario climat 2030 pour la
              France, permettant de limiter les impacts du dérèglement climatique à un niveau
              soutenable. Pour ce faire, nous mettons à votre disposition quelques paramètres, un
              modèle de calcul et un joli tableau de bord.
            </p>
            <p className="hero-text bold-text">
              Configurez, visualisez, et, une fois l'ensemble du <br />
              vivant préservé, partagez : il paraît que c'est sympa.
            </p>
            <br></br>
            <div className="hero-btn flex-item">
              <Link to="/simulator">
                <button id="cta-btn" className="green-btn">
                  Mission acceptée !
                </button>
              </Link>
            </div>
          </div>
          <div id="hero-img-container">
            <img className="hero-img" src="/images/Illustration Home.png" alt="landing-visual" />
          </div>
        </div>
        <button className="blinking">
          <a href="#next-landing">
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </button>
      </article>

      <article id="next-landing" className="next-landing flex-item">
        <div className="home-item flex-item flex-column light-text">
          <div className="home-card-head flex-item">
            <img
              className="team-logo"
              src="/images/home/interrogation - vert.svg"
              alt="Logo Ironhack"
            />
            <h4 className="nomarge">Pourquoi Mission Climat ?</h4>
          </div>
          <p>
            <b>
              Une très grande majorité de français sait qu'un réchauffement climatique est en cours,
              et en est inquiet{" "}
            </b>
            <u>
              <a
                href="https://www.ipsos.com/sites/default/files/ct/news/documents/2019-11/ipsos_pour_edf_obscop_27nov.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                (sondage 2019)
              </a>
            </u>
            . L’urgence d’agir est régulièrement rappelée par la communauté scientifique.
          </p>
          <p>
            Si <b>le constat est de plus en plus partagé, le diagnostic ne l'est pas</b>: les moyens
            pour agir font encore débat et les ordres de grandeurs des transformations à mettre en
            œuvre ne sont pas connus. Or, "Il n'y a de bon vent qu'à celui qui sait où il va".
          </p>
          <p>
            C'est l'objectif de Mission Climat :{" "}
            <b>
              démocratiser et partager ce savoir, que tous ceux qui se "mêlent de corriger le monde"
              s’approprient ces enjeux et puissent prendre part au débat, à l'action
            </b>
            . Avec Mission Climat, vous pouvez ainsi définir votre propre scénario pour 2030, à
            l'échelle nationale, et identifier les mesures essentielles à la construction d’un
            avenir convenable pour toutes et tous.
          </p>
        </div>

        <div className="home-item flex-item flex-column light-text">
          <div className="home-card-head flex-item">
            <img className="team-logo" src="/images/home/ampoule - vert.svg" alt="Logo Ironhack" />
            <h4 className="nomarge">Comment ça marche ?</h4>
          </div>
          <p>
            Début 2019, le cabinet de conseil <b>BL évolution</b> publiait l'étude{" "}
            <b>
              <i>
                « Comment la France peut s’aligner sur une trajectoire compatible avec les 1,5°C »
              </i>
            </b>
            . Son objectif : donner à voir l'importance des mesures à mettre en place pour réduire
            les émissions de gaz à effet de serre de la France et s’aligner sur les recommandations
            du GIEC.
          </p>
          <p>
            Avec un modèle de calcul simplifié,{" "}
            <b>
              Mission Climat permet de visualiser l'impact d'une trentaine de mesures sociétales sur
              les émissions de gaz à effet de serre en France
            </b>
            .
          </p>
          <p>
            Le modèle calcule également une{" "}
            <b>projection mondiale de ces émissions et leur impact sur le climat </b>
            selon des hypothèses sur l’évolution de la population et la répartition des émissions
            entre pays.
          </p>
          <p>
            Une page de résultats complets détaille enfin les changements que les scénarios réalisés
            impliquent pour la société française.
          </p>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default Home;

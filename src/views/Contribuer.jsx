import React from "react";
import "styles/contribuer.css";
import Header from "components/partials/Header";
import { Helmet } from "react-helmet";

const Contribuer = () => {
  return (
    <div className="form-page flex-item flex-column light-text">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mission Climat / Contribuer</title>
        <meta
          name="description"
          content="Contribuez à Mission Climat ! Développeurs, artistes, game designers, dons à Avenir Climatique, etc."
        />
        <link rel="canonical" href="http://mission-climat.io/contribuer" />
      </Helmet>
      <Header />
      <div className="margeup contribuer">
        <div className="contribuer-title flex-item flex-column">
          <h3>Rejoignez l'aventure Mission Climat</h3>
          <h5>contact@mission-climat.io</h5>
        </div>

        <p>
          Le projet Mission Climat n'en est qu'à ses débuts : l'équipe porte de belles ambitions
          pour les développements futurs. Les profils recherchés et les évolutions prévues sont
          esquissés à la suite. Si vous souhaitez en savoir davantage et rejoindre l'aventure,
          contactez-nous !
        </p>

        <div id="contribuer-dons">
          <h5>Dons à l'association Avenir Climatique</h5>
          <p>
            Pour contribuez au développement du projet et soutenir l'action de l'association vous
            pouvez donner à Avenir Climatique.
          </p>
          <button className="valid-button">
            <a
              href="https://www.helloasso.com/associations/avenir-climatique/formulaires/3/widget"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donner
            </a>
          </button>
        </div>

        <section className="flex-item">
          <div className="home-item flex-item flex-column light-text">
            <div className="home-card-head flex-item">
              <img
                className="team-logo"
                src="/images/home/ampoule - vert.svg"
                alt="Logo Ironhack"
              />
              <h4 className="nomarge">Contributions bienvenues</h4>
            </div>
            <h5>Financeurs</h5>
            <p>
              Vous êtes séduits par le projet et souhaitez lui permettre de se développer : de
              démultiplier son impact, le nombre de personnes sensibilisées aux enjeux
              énergie/climat, à l'importance de la sobriété, etc.
            </p>
            <h5>Educateurs DD, Formateurs</h5>
            <p>
              Vous avez des idées d'ateliers idoines permettant d'utiliser le site, et dont la
              communauté pourrait bénéfier.
            </p>
            <h5>Développeurs</h5>
            <p>
              Vous souhaitez participer à la maintenance, à l'optimisation et au développement du
              site. La stack technique est précisée à la page "à propos".
            </p>
            <h5>Sociologues, anthropologues, économistes</h5>
            <p>
              Vous souhaitez participer à la valorisation des co-bénéfices sociaux, des impacts
              économiques des scénarios configurés
            </p>
            <h5>Créatifs</h5>
            <p>
              Vous êtes directeur créa, artistique, illustrateur, etc. et vous souhaitez apporter un
              concept nouveau, permettant de rendre l'expérience plus grand public, sympathique,
              belle, incarnée, ou simplement y contribuer.
            </p>
          </div>

          <div className="home-item flex-item flex-column light-text">
            <div className="home-card-head flex-item">
              <img
                className="team-logo"
                src="/images/home/interrogation - vert.svg"
                alt="Logo Ironhack"
              />
              <h4 className="nomarge">Mission Climat demain</h4>
            </div>
            <h5>+ d'outils d'accompagnement</h5>
            <p>
              Nous souhaitons mettre à disposition des idées d'atelier à destination du grand public
              et utilisant le site. Une idée basique : des groupes de 4 à 5 personnes, missionnées
              pour réaliser, ensemble, un scénario 1.5°C, avant mise en commun. Belles discussions
              en perspective n'est-ce pas ?
            </p>

            <h5>+ de jeu, + grand public</h5>
            <p>
              Nous souhaitons réfléchir sérieusement à une version grand public, qui n'aurait rien à
              voir avec celle-là. Nous avons quelques idées... Et vous ?
            </p>

            <h5>+ de co-bénéfices</h5>
            <p>
              Nous souhaitons développer les co-bénéfices sociaux, environnementaux et économiques
              des scénarios de sobriété, passage indispensable pour donner à voir ce qu'ils sont
              profondément, c'est à dire tout sauf de la décroissance, mais plutôt une possibilité
              de développer ce qui nous importe réellement ("des biens aux liens). Cela donnerait
              peut-être davantage envie ?
            </p>

            <h5>+ de passage à l'action</h5>
            <p>
              Nous pensons que l'outil peut être un formidable levier de passage à l'action, à
              toutes les échelles. On peut par exemple imaginer, après le scénario, une liste
              d'actions possibles, dépendantes de vos choix. Qu'en dites vous ?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contribuer;

import React from "react";
import "../styles/about.css";

import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/partials/Header";

export const AboutUs = () => {
  return (
    <div className="about-page flex-item flex-column light-text">
      <Header />
      <section className="about-card flex-item flex-column">
        <div className="about-card-head flex-item">
          <img
            className="team-logo"
            src="../../images/logo/Conception.svg"
            alt="Logo Ironhack"
          />
          <h3 className="nomarge">Historique du Projet</h3>
        </div>
        <h5>L'étude 1.5 de BL évolution / Février 2019</h5>
        <p>
          L'histoire de ce projet débute avec la publication, en février 2019,
          de l'étude <i><b>«Comment la France peut s’aligner sur une trajectoire compatible avec les 1,5°C»</b></i> par le cabinet de conseil BL évolution. S’appuyant sur les données du rapport <i><b>«Réchauffement planétaire de 1,5°C»</b></i> du <b>Groupe d’Experts Intergouvernemental sur l’Evolution du Climat (GIEC)</b>, 
           l’étude donne à voir l'importance des mesures permettant de réduire les émissions de gaz à effet de serre
          de la France pour s’aligner sur les recommandations du GIEC.
        </p>
        <div id="about-articles" className="flex-item">

          <div className="flex-item flex-column">
            <a target="_blank" href="http://bl-evolution.com/portfolio/comment-saligner-sur-une-trajectoire-compatible-avec-les-15c/" >
              <img src="../../images/about/etude BL - vert.svg"></img>
            </a>
            <p>Etude 1.5 de BL évolution</p> 
          </div>

          <div className="flex-item flex-column">
            <a target="_blank" href="https://reporterre.net/Climat-rester-sous-la-barre-de-1-5-oC-impose-des-choix-radicaux-sur-la" >
              <img src="../../images/about/liens articles - vert.svg"></img>
            </a>
            <p>Article de Reporterre</p> 
          </div>

          <div className="flex-item flex-column">
            <a target="_blank" href="https://www.novethic.fr/actualite/environnement/climat/isr-rse/infographie-interdiction-d-acheter-une-voiture-neuve-ou-de-prendre-un-long-courrier-couvre-feu-thermique-quotas-sur-les-produits-importes-les-mesures-chocs-pour-rester-sous-1-5-c-146877.html" >
              <img src="../../images/about/liens articles - vert.svg"></img>
            </a>
            <p>Article de Novethic</p> 
          </div>

          <div className="flex-item flex-column">
            <a target="_blank" href="https://www.marianne.net/societe/rechauffement-climatique-scenario-noir" >
              <img src="../../images/about/liens articles - vert.svg"></img>
            </a>
            <p>Article de Marianne</p> 
          </div>

          <div className="flex-item flex-column">
            <a target="_blank" href="https://reporterre.net/Rester-sous-les-1-5-oC-voici-comment-nos-vies-pourraient-changer" >
              <img src="../../images/about/megaphone - vert.svg"></img>
            </a>
            <p>Tribune dans Reporterre</p>
          </div>
        </div>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/iCDYAunYQFA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p className="frame-legend">Interview de Guillaume Martin pour Brut</p>

        <h5>Développement maquette @Ironhack Paris / Février 2020</h5>
        <p>
          En janvier 2020, Guillaume Martin, l'un des 2 co-auteurs de l'étude, et Pascal Besson
          décident de démocratiser et valoriser ce modèle autour d'un simulateur web. Une maquette 
          est développée en 2 semaines avec Nina Gautreau et Paul Carillion, 
          pour le projet final du bootcamp Ironhack Paris. En parallèle, Charles-Adrien Louis, Célian Niclot 
          et Guillaume Martin simplifient et améliorent le modèle pour le rendre accessible au public. Le projet est finalement honoré en étant élu meilleur projet web par la promotion
          de dev web puis lors du hackshow du 9 mars de Ironhack. Champagne !
        </p>

        <h5>Développement Mission Climat / Avril 2020</h5>
        <p>
          Après un court repos une petite équipe est montée pour finaliser le projet.
          Oriana Berthomieu définit l'UI finale et Emmanuel Bernard rejoint Pascal pour finaliser le développement. Le site sort enfin le 3 mai 2020, au grand bonheur de tout ce joli monde, et nous l'espérons, au vôtre également !
        </p>
      </section>

      <section className="about-card flex-item flex-column">
        <article className="about-card-lead flex-item flex-column">
          <div className="about-card-head flex-item">
            <img
              className="team-logo"
              src="../../images/logo/Team.svg"
              alt="Logo Equipe"
            />
            <h3 className="nomarge">L'équipe</h3>
          </div>

          <p>L'ensemble de l'équipe s'est investie bénévolement. <br/>Vous souhaitez les rejoindre ? Les soutenir dans leur futur projet "Mission Transition" ? C'est ici !</p>

          <h5>Pilotage Projet</h5>

          <div className="flex-item about-team-section">
            <div className="dev-team">
              <a className="dev-box-img" target="_blank" href="https://www.linkedin.com/in/pascal-besson/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
              </a>
              <a className="dev-box-name" target="_blank" href="https://www.linkedin.com/in/pascal-besson/">
                  Pascal Besson
              </a>
              <p className="dev-box-desc">Ingénieur / RSE / Dev Fullstack</p>
              <p className="dev-box-role">Rôle : Pilotage projet, dev front & back</p>
            </div>

            <div className="dev-team">
              <a className="dev-box-img" target="_blank" href="https://www.linkedin.com/in/guillaume-martin-86662989/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
              </a>
              <a className="dev-box-name" target="_blank" href="https://www.linkedin.com/in/guillaume-martin-86662989/">
                  Guillaume Martin <img className="dev-box-logo" src="../../images/logo/BLevo.png" alt="Logo B&L"/>
              </a>
              <p className="dev-box-desc">Expert Climat / Energie @ B&L évolution</p>
              <p className="dev-box-role">Rôle : Pilotage projet, modèle émissions</p>
            </div>
          </div>

          <h5>Data : modèle de calcul des émissions</h5>

          <p>Le modèle de calcul a été réalisé par B&L Évolution.</p>

          <div className="flex-item about-team-section">
              <div className="dev-team">
                <a className="dev-box-img" target="_blank" href="https://www.linkedin.com/in/charles-adrien-louis-63863526/">
                    <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
                </a>
                <a className="dev-box-name" target="_blank" href="https://www.linkedin.com/in/charles-adrien-louis-63863526/">
                    Charles-Adrien Louis <img className="dev-box-logo" src="../../images/logo/BLevo.png" alt="Logo B&L"/>
                </a>
                <p className="dev-box-desc">Co-fondateur et co-dirigeant B&L Évolution</p>
                <p className="dev-box-role">Rôle : Modèle émissions</p>
              </div>

              <div className="dev-team">
                <a className="dev-box-img" target="_blank" href="https://www.linkedin.com/in/c%C3%A9lian-niclot/">
                    <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
                </a>
                <a className="dev-box-name" target="_blank" href="https://www.linkedin.com/in/c%C3%A9lian-niclot/">
                    Célian Niclot <img className="dev-box-logo" src="../../images/logo/BLevo.png" alt="Logo B&L"/>
                </a>
                <p className="dev-box-desc">Consultant énergie climat @ B&L Évolution</p>
                <p className="dev-box-role">Rôle : Modèle émissions</p>
              </div>
          </div>

          <h5>Développement, UX/UI</h5>

          <div className="flex-item about-team-section">
            <div className="dev-team">
              <a className="dev-box-img" target="_blank" href="https://www.linkedin.com/in/ninagautreau/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
              </a>
              <a className="dev-box-name" target="_blank" href="https://www.linkedin.com/in/ninagautreau/">
                  Nina Gautreau <img className="dev-box-logo" src="../../images/logo/Nina-logo.svg" alt="Logo Nina Gautreau"/>
              </a>
              <p className="dev-box-desc">Teacher Assistant / Dev Fullstack</p>
              <p className="dev-box-role">Rôle : Dev Front, UX-UI</p>
            </div>

            <div className="dev-team">
              <a className="dev-box-img" target="_blank" href="https://www.linkedin.com/in/oriana-berthomieu-3baa1431/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
              </a>
              <a className="dev-box-name" target="_blank" href="https://www.linkedin.com/in/oriana-berthomieu-3baa1431/">
                  Oriana Berthomieu 
              </a>
              <p className="dev-box-desc">Product designer</p>
              <p className="dev-box-role">Rôle : UI</p>
            </div>

            <div className="dev-team">
              <a className="dev-box-img" target="_blank" href="https://www.linkedin.com/in/emmbernard/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
              </a>
              <a className="dev-box-name" target="_blank" href="https://www.linkedin.com/in/emmbernard/">
                  Emmanuel Bernard
              </a>
              <p className="dev-box-desc">Entrepreneur / Dev Fullstack</p>
              <p className="dev-box-role">Rôle : Dev, déploiement</p>
            </div>

            <div className="dev-team">
              <a className="dev-box-img" target="_blank" href="https://www.linkedin.com/in/paul-carillion-3826041a1/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
              </a>
              <a className="dev-box-name" target="_blank" href="https://www.linkedin.com/in/paul-carillion-3826041a1/">
                  Paul Carillon
              </a>
              <p className="dev-box-desc">Dev Fullstack</p>
              <p className="dev-box-role">Rôle : Dev, graphiques</p>
            </div>
          </div>

          {/* <h5>Equipe tests</h5>
          <p>Tom Nico, Estelle Payan, Pacco Bailly</p> */}
        </article>

        <div className="separator"></div>
        <div className="separator"></div>

        <article className="about-card-lead flex-item flex-column">
          <div className="about-card-head flex-item">
            <img
              className="team-logo"
              src="../../images/logo/BLevo.png"
              alt="Logo B&L"
            />
            <h3 className="nomarge">B&L Évolution</h3>
          </div>
          <p>
            Les entreprises et territoires qui ont l’ambition de se développer
            de manière durable font confiance à l'équipe d’experts de B&L
            évolution depuis plus de 9 ans. B&L évolution est un bureau d’études
            et de conseils en développement durable. Au service de la société,
            cette équipe engagée souhaite diffuser une vision résiliente de
            l’aménagement des territoires et du développent des entreprises en
            associant une vision fortement participative à une prise de
            conscience réaliste et éclairée des enjeux du XXIe siècle.
          </p>
          <a className="link-team-about" target="_blank" href="https://bl-evolution.com/"><img
                      src="../../images/logo/Web.svg"
                      alt="LinkedIn "
                    /> bl-evolution.com
          </a>


          <div className="separator"></div>
          <div className="separator"></div>

          <div className="about-card-head flex-item ac">
            <img
              className="team-logo"
              src="../../images/logo/AC.png"
              alt="Logo Avenir Climatique"
            />
            <h3 className="nomarge">Avenir climatique</h3>
          </div>
          <p>
            L'association Avenir Climatique a pour objectif de faire des enjeux
            énergie / climat une priorité nationale en formant les citoyens et
            citoyennes. L'association développe des actions de sensibilisation
            et de formation adaptées et attractives pour tous les publics (MOOC,
            Conférences, jeux de société...) Elle permet à toutes et tous de
            monter en compétences sur le fond (savoirs techniques et
            scientifiques) et sur la forme (diffusion du message, accompagnement
            au changement, esprit critique...) Dans son fonctionnement au
            quotidien, elle promeut et expérimente afin de pousser à un maximum
            d'exemplarité (baisse de l'empreinte carbone, inclusion,
            fonctionnement holacratique...){" "}
          </p>
          <p>Merci à Tom Nico, Estelle Payan, Pacco Bailly, Gaëlle...</p>
          <a className="link-team-about" target="_blank" href="https://avenirclimatique.org/"><img
                      src="../../images/logo/Web.svg"
                      alt="LinkedIn "
                    /> avenirclimatique.org
          </a>
        </article>
      </section>

      <article className="about-card flex-item flex-column">
        <div className="about-card-head flex-item">
          <FontAwesomeIcon className="about-icon" icon={faHandHoldingHeart} />
          <h3 className="nomarge">Remerciements</h3>
        </div>
        <ul>
          <li>
            <span>Ironhack Paris</span> pour nous avoir accompagnés tout le long du
            bootcamp dans la préparation puis le développement de ce projet,
            avec des remerciements particuliers à Katya, Guillaume, Franck, PH,
            Clara et Tatijana.
          </li>
          <li>
            <span>Simon Durning</span> pour ses conseils en direction de projet
            web.
          </li>
          <li>
            <span>Ingrid Thonet, Cédric Bernoux et Pierre-Etienne Delfly</span>{" "}
            pour leurs regards avisés UX/UI.
          </li>
          <li>
            <span>Pauline Gautreau</span> pour la création de notre logo.
          </li>
          <li>
            <span>Minh Cuong Le Quan</span> pour les multiples versions futures
            que ses idées alimentent.
          </li>
        </ul>
      </article>

      <article className="about-card flex-item flex-column">
        <div className="about-card-head flex-item">
          <FontAwesomeIcon className="about-icon" icon={faHandHoldingHeart} />
          <h3 className="nomarge">Droits, licences et spécifications</h3>
        </div>

        <div className="flex-item between">
          <div>
            <h5>Site Mission Climat</h5>

            <p>Stack : JS / React / NodeJS
                <br />
                API : Google Sheet et Drive
                <br />
                Librairies : rechart, material UI
            </p>
            <p>Auteurs : BL évolution, Pascal Besson, Nina Gautreau</p>
            <p>Le site est sous licence CC ...</p>
            <p>Lien github</p>
          </div>

        
          <div>
            <h5>Modèle de calcul des émissions</h5>

            <p>Auteurs : BL évolution</p>
            <p>Le modèle est sous licence CC ...</p>
            <p>Lien téléchargement</p>

            </div>
          </div>
      </article>

      <img
            className="hero-img"
            src="../../images/team.svg"
            alt="landing-visual"
          />

    </div>
  );
};

export default AboutUs;

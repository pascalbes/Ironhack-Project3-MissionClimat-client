import React from "react";
import "../styles/about.css";

import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutUs = () => {
  return (
    <div className="about-page flex-item flex-column">
      <article className="about-card about-conception border-btn  flex-item flex-column">
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
          de l'étude <i><b>«Comment la France peut s’aligner sur une trajectoire compatible avec les
          1,5°C»</b></i> par le cabinet de conseil BL évolution.
        </p>
        <p>
          S’appuyant sur les données scientifiques du rapport du <b>Groupe
          d’Experts Intergouvernemental sur l’Evolution du Climat (GIEC)</b> intitulé
          <i><b>«Réchauffement planétaire de 1,5°C»</b></i>, l’étude donne à voir l'importance
          des mesures concrètes permettant de réduire les émissions de gaz à effet de serre
          de la France pour s’aligner sur les recommandations du GIEC, et limiter l'impact des conséquences du réchauffement climatique
          à un niveau à peu près soutenable.
        </p>
        <p>
          Liens étude et articles de presse
        </p>
        <h5>Développement v0 @Ironhack Paris / Février 2020</h5>
        <p>
          En janvier 2020, Guillaume Martin, l'un des 2 co-auteurs de l'étude, et Pascal Besson
          décident de démocratiser et valoriser ce modèle autour d'un simulateur web. Une première maquette 
          est alors développée en 2 semaines, dans le cadre du projet final
          du bootcamp Ironhack Paris, auquel Pascal participe, avec Nina Gautreau et Paul Carillion.
          En parallèle, Charles-Adrien Louis, Célian Niclot et Guillaume Martin simplifient et 
          améliorent le modèle pour le rendre accessible au public.
        </p>
        <p>
          Le projet, appelé tour à tour "Mon Scénario Climat", "Mission 1.5" puis "Mission Climat",
          est finalement honoré en étant élu meilleur projet web par la promotion
          de dev web puis lors du hackshow du 9 mars. Champagne! Et repos...
        </p>

        <h5>Développement Mission Transition / Avril 2020</h5>
        <p>
          Après un cours repos une petite équipe est montée pour finaliser le projet.
          Oriana Berthomieu définit l'UI finale du projet, en s'inspirant du travail déjà réalisé par Nina,
          et Emmanuel Bernard rejoint Pascal pour finaliser le développement.
        </p>
        <p>
          Le site sort enfin le 3 mai 2020, au grand bonheur de tout ce joli monde, et nous l'espérons,
          au vôtre également !
        </p>
      </article>

      <section className="about-lead-team flex-item">
        <article className="about-card about-card-lead border-btn  flex-item flex-column">
          <div className="about-card-head flex-item">
            {/* <img
              className="team-logo"
              src="../../images/logo/logoIH.svg"
              alt="Logo Ironhack"
            /> */}
            <h3 className="nomarge">L'équipe</h3>
          </div>

          <h5>Pilotage Projet</h5>
          <p><a target="_blank" href="https://www.linkedin.com/in/pascal-besson/">
                Pascal Besson
              </a> et <a target="_blank" href="https://www.linkedin.com/in/guillaume-martin-86662989/">
                    Guillaume Martin
              </a>
          </p>

          <h5>Equipe développement</h5>

          <p>Pascal Besson, <a target="_blank" href="https://www.linkedin.com/in/ninagautreau/">
                    Nina Gautreau
              </a>, <a target="_blank" href="https://www.linkedin.com/in/paul-carillion-3826041a1/">
                    Paul Carillion
              </a> et <a target="_blank" href="https://www.linkedin.com/in/emmbernard/">
                    Emmanuel Bernard
              </a>
          </p>

          <h5>Equipe données / modèle émissions</h5>
          <p>Guillaume Martin, <a target="_blank" href="https://www.linkedin.com/in/charles-adrien-louis-63863526/">
                    Charles-Adrien Louis
              </a> et <a target="_blank" href="https://www.linkedin.com/in/c%C3%A9lian-niclot/">
                    Célian Niclot
              </a>
          </p>

          <h5>UX / UI</h5>
          <p>Nina Gautreau et <a target="_blank" href="https://www.linkedin.com/in/oriana-berthomieu-3baa1431/">
                    Oriana Berthomieu
              </a>
          </p>

          <h5>Equipe tests</h5>
          <p>Tom Nico, Estelle Payan, Pacco Bailly</p>

          <p>L'ensemble de l'équipe s'est investie bénévolement.</p>

          <p>
            Mission Climat a été développé en 2 semaines par 3 étudiants du
            bootcamp Ironhack Paris, dans le cadre du projet de fin d'étude.
          </p>
          <p>
            Stack : JS / React / NodeJS / Mongoose
            <br />
            API : Google Sheet et Drive
            <br />
            Librairies : rechart, nivo, material UI
          </p>

          <hr className="border-btn" />
          <div class="flex-item dev-team">
            <div class="flex-column dev-team-linkedin-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/pascal-besson/"
              >
                <img
                  className="linkedin"
                  src="../../images/logo/linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div class="flex-column">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/pascal-besson/"
              >
                Pascal Besson
              </a>
              <br />
              Historique : Ingénieur / Master RSE / Dev Fullstack
              <br />
              Rôle : Chef de projet, dev back & front
            </div>
          </div>

          <div class="flex-item dev-team">
            <div class="flex-column dev-team-linkedin-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/paul-carillion-3826041a1/"
              >
                <img
                  className="linkedin"
                  src="../../images/logo/linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div class="flex-column">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/paul-carillion-3826041a1/"
              >
                Paul Carillion
              </a>
              <br />
              Historique : Études de lettres / Dev Fullstack
              <br /> Rôle : Graphiques, dev back & front
            </div>
          </div>

          <div class="flex-item dev-team">
            <div class="flex-column dev-team-linkedin-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ninagautreau/"
              >
                <img
                  className="linkedin"
                  src="../../images/logo/linkedin.svg"
                  alt="LinkedIn "
                />
              </a>
            </div>
            <div class="flex-column">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ninagautreau/"
              >
                Nina Gautreau
              </a>
              <br />
              Historique : Mode & Luxe / Dev Fullstack
              <br />
              Rôle : UX-UI, CSS, dev front
            </div>
          </div>

          <img
            className="hero-img"
            src="../../images/team.svg"
            alt="landing-visual"
          />
        </article>

        <article className="about-card about-card-lead border-btn  flex-item flex-column">
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
          <p>
            Consultant énergie climat et mobilités au sein de B&L évolution,
            Guillaume accompagne des entreprises et des territoires dans leur
            transition écologique. Ingénieur (Grenoble INP - ENSE3) il est aussi
            membre actif de l'association Avenir Climatique et co-auteur avec
            Charles-Adrien Louis de l'étude B&L évolution "Comment la France
            peut s'aligner sur une trajectoire compatible avec les 1,5°C"
            publiée en 2019.{" "}
          </p>
          <p>
            Après une Licence Physique-Chimie, un Master Sciences de l'Océan, de
            l'Atmosphère et du Climat, Célian est consultant énergie climat au
            sein de B&L Evolution. C'est le créateur de la base de données pour
            Mission Climat.
          </p>
          <div className="about-links flex-item">
            <div class="flex-column ">
              <div class="flex-item ">
                <div class="flex-column dev-team-linkedin-iconsmall">
                  <a target="_blank" href="https://bl-evolution.com/">
                    <img
                      className="linkedin-small"
                      src="../../images/logo/Web.svg"
                      alt="LinkedIn "
                    />
                  </a>
                </div>
                <div class="flex-column  dev-team-linkedin-iconsmall-name">
                  <a target="_blank" href="https://bl-evolution.com/">
                    bl-evolution.com
                  </a>
                </div>
              </div>
            </div>

            <div class="flex-column ">
              <div class="flex-item ">
                <div class="flex-column dev-team-linkedin-iconsmall">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/guillaume-martin-86662989/"
                  >
                    <img
                      className="linkedin-small"
                      src="../../images/logo/linkedin.svg"
                      alt="LinkedIn "
                    />
                  </a>
                </div>
                <div class="flex-column  dev-team-linkedin-iconsmall-name">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/guillaume-martin-86662989/"
                  >
                    Guillaume Martin
                  </a>
                </div>
              </div>
            </div>

            <div class="flex-column ">
              <div class="flex-item ">
                <div class="flex-column dev-team-linkedin-iconsmall">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/c%C3%A9lian-niclot/"
                  >
                    <img
                      className="linkedin-small"
                      src="../../images/logo/linkedin.svg"
                      alt="LinkedIn "
                    />
                  </a>
                </div>
                <div class="flex-column  dev-team-linkedin-iconsmall-name">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/c%C3%A9lian-niclot/"
                  >
                    Célian Niclot
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="separator"></div>
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
          <p>Merci à Estelle, Pacco, Baptise, Gaëlle...</p>

          <div class="flex-item ">
            <div class="flex-column dev-team-linkedin-iconsmall">
              <a target="_blank" href="https://avenirclimatique.org/">
                <img
                  className="linkedin-small"
                  src="../../images/logo/Web.svg"
                  alt="LinkedIn "
                />
              </a>
            </div>
            <div class="flex-column  dev-team-linkedin-iconsmall-name">
              <a target="_blank" href="https://avenirclimatique.org/">
                avenirclimatique.org
              </a>
            </div>
          </div>
        </article>
      </section>

      <article className="about-card border-btn  flex-item flex-column">
        <div className="about-card-head flex-item">
          <FontAwesomeIcon className="about-icon" icon={faHandHoldingHeart} />
          <h3 className="nomarge">Remerciements</h3>
        </div>
        <ul>
          <li>
            <span>Ironhack</span> pour nous avoir accompagnés tout le long du
            bootcamp dans la préparation puis le développement de ce projet,
            avec des remerciements particuliers à Katya, Guillaume, Franck, PH,
            Clara et Tatijana.
          </li>
          <li>
            <span>Simon Durning</span> pour ses conseils en direction de projet
            web.
          </li>
          <li>
            <span>Emmanuel Bernard</span> pour ses conseils et en particulier
            celui déterminant de travailler avec un modèle calculatoire
            externalisé.
          </li>
          <li>
            <span>Ingrid Thonet, Cédric Bernoux et Pierre-Etienne Delfly</span>{" "}
            pour leurs regards avisés UX/UI.
          </li>
          <li>
            <span>Pauline Gautreau</span> pour avoir créé notre logo.
          </li>
          <li>
            <span>Minh Cuong Le Quan</span> pour les multiples versions futures
            que ses idées alimentent.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default AboutUs;

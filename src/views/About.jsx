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
          1,5°C»</b></i> par le cabinet de conseil BL évolution. S’appuyant sur les données du rapport <i><b>«Réchauffement planétaire de 1,5°C»</b></i>
           du <b>Groupe d’Experts Intergouvernemental sur l’Evolution du Climat (GIEC)</b>, 
           l’étude donne à voir l'importance des mesures permettant de réduire les émissions de gaz à effet de serre
          de la France pour s’aligner sur les recommandations du GIEC.
        </p>
        <p>
          Liens étude et articles de presse
        </p>
        <h5>Développement maquette @Ironhack Paris / Février 2020</h5>
        <p>
          En janvier 2020, Guillaume Martin, l'un des 2 co-auteurs de l'étude, et Pascal Besson
          décident de démocratiser et valoriser ce modèle autour d'un simulateur web. Une maquette 
          est développée en 2 semaines avec Nina Gautreau et Paul Carillion, 
          pour le projet final du bootcamp Ironhack Paris. En parallèle, Charles-Adrien Louis, Célian Niclot 
          et Guillaume Martin simplifient et améliorent le modèle pour le rendre accessible au public. Le projet est finalement honoré en étant élu meilleur projet web par la promotion
          de dev web puis lors du hackshow du 9 mars de Ironhack. Champagne!
        </p>

        <h5>Développement Mission Climat / Avril 2020</h5>
        <p>
          Après un cours repos une petite équipe est montée pour finaliser le projet.
          Oriana Berthomieu définit l'UI finale et Emmanuel Bernard rejoint Pascal pour finaliser le développement. Le site sort enfin le 3 mai 2020, au grand bonheur de tout ce joli monde, et nous l'espérons, au vôtre également !
        </p>
      </article>

      <section className="about-lead-team flex-item flex-column">
        <article className="about-card-lead border-btn flex-item flex-column">
          <div className="about-card-head flex-item">
            {/* <img
              className="team-logo"
              src="../../images/logo/logoIH.svg"
              alt="Logo Ironhack"
            /> */}
            <h3 className="nomarge">L'équipe</h3>
          </div>

          <p>L'ensemble de l'équipe s'est investie bénévolement.</p>
          <p> Vous souhaitez les rejoindre ? les soutenir dans leur futur projet "Mission Transition" ? C'est ici !</p>

          <h5>Pilotage Projet</h5>

          <div className="flex-item about-team-section">

            <div class="flex-item dev-team">
              <div class="flex-column dev-team-linkedin-icon">
                <a target="_blank" href="https://www.linkedin.com/in/pascal-besson/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
                </a>
              </div>
              <div class="flex-column">
                <a target="_blank" href="https://www.linkedin.com/in/pascal-besson/">
                  Pascal Besson
                </a>
                <br />Ingénieur / RSE / Dev Fullstack<br />
                Rôle : pilotage projet, dev
              </div>
            </div>

            <div class="flex-item dev-team">
              <div class="flex-column dev-team-linkedin-icon">
                <a target="_blank" href="https://www.linkedin.com/in/guillaume-martin-86662989/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
                </a>
              </div>
              <div class="flex-column">
                <a target="_blank" href="https://www.linkedin.com/in/guillaume-martin-86662989/">
                Guillaume Martin
                </a>
                <br />Expert Climat / Energie @ BL évolution<br />
                Rôle : pilotage projet, modèle émissions<br />
                <img className="bl-logo" src="../../images/logo/BLevo.png" alt="Logo B&L"/>
              </div>
            </div>

          </div>

          <h5>Data : modèle de calcul des émissions</h5>

          <p>Le modèle de calcul a été réalisé par BL évolution.</p>

          <div className="flex-item about-team-section">

            <div class="flex-item dev-team">
                <div class="flex-column dev-team-linkedin-icon">
                  <a target="_blank" href="https://www.linkedin.com/in/charles-adrien-louis-63863526/">
                    <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
                  </a>
                </div>
                <div class="flex-column">
                  <a target="_blank" href="https://www.linkedin.com/in/charles-adrien-louis-63863526/">
                  Charles-Adrien Louis
                  </a>
                  <br />Co-fondateur et co-dirigeant BL évolution<br />
                  Rôle : modèle émission<br />
                  <img className="bl-logo" src="../../images/logo/BLevo.png" alt="Logo B&L"/>
                </div>
              </div>

              <div class="flex-item dev-team">
                <div class="flex-column dev-team-linkedin-icon">
                  <a target="_blank" href="https://www.linkedin.com/in/c%C3%A9lian-niclot/">
                    <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
                  </a>
                </div>
                <div class="flex-column">
                  <a target="_blank" href="https://www.linkedin.com/in/c%C3%A9lian-niclot/">
                  Célian Niclot
                  </a>
                  <br />Consultant énergie climat @ BL évolution<br />
                  Rôle : modèle émission<br />
                  <img className="bl-logo" src="../../images/logo/BLevo.png" alt="Logo B&L"/>
                </div>
              </div>
            
          </div>

          <h5>Dev, UX/UI</h5>

          <div className="flex-item about-team-section">

            <div class="flex-item dev-team">
              <div class="flex-column dev-team-linkedin-icon">
                <a target="_blank" href="https://www.linkedin.com/in/ninagautreau/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
                </a>
              </div>
              <div class="flex-column">
                <a target="_blank" href="https://www.linkedin.com/in/ninagautreau/">
                Nina Gautreau
                </a>
                <br />Dev Fullstack<br />
                Rôle : UX-UI, CSS, dev front
              </div>
            </div>

            <div class="flex-item dev-team">
              <div class="flex-column dev-team-linkedin-icon">
                <a target="_blank" href="https://www.linkedin.com/in/oriana-berthomieu-3baa1431/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
                </a>
              </div>
              <div class="flex-column">
                <a target="_blank" href="https://www.linkedin.com/in/oriana-berthomieu-3baa1431/">
                Oriana Berthomieu
                </a>
                <br />Product designer<br />
                Rôle : UI
              </div>
            </div>

            <div class="flex-item dev-team">
              <div class="flex-column dev-team-linkedin-icon">
                <a target="_blank" href="https://www.linkedin.com/in/emmbernard/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
                </a>
              </div>
              <div class="flex-column">
                <a target="_blank" href="https://www.linkedin.com/in/emmbernard/">
                Emmanuel Bernard
                </a>
                <br />Entrepreneur, dev Fullstack<br />
                Rôle : dev, déploiement
              </div>
            </div>

            <div class="flex-item dev-team">
              <div class="flex-column dev-team-linkedin-icon">
                <a target="_blank" href="https://www.linkedin.com/in/paul-carillion-3826041a1/">
                  <img className="linkedin" src="../../images/logo/linkedin.svg" alt="LinkedIn"/>
                </a>
              </div>
              <div class="flex-column">
                <a target="_blank" href="https://www.linkedin.com/in/paul-carillion-3826041a1/">
                Paul Carillion
                </a>
                <br />Dev Fullstack<br />
                Rôle : graphiques, dev
              </div>
            </div>

          </div>

          {/* <h5>Equipe tests</h5>
          <p>Tom Nico, Estelle Payan, Pacco Bailly</p> */}

          <hr className="border-btn" />
    

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
          {/* <p>
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
          </p> */}
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
{/* 
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
            </div> */}
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
          <p>Merci à Tom Nico, Estelle Payan, Pacco Bailly, Gaëlle...</p>

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

      <article className="about-card border-btn  flex-item flex-column">
        <div className="about-card-head flex-item">
          <FontAwesomeIcon className="about-icon" icon={faHandHoldingHeart} />
          <h3 className="nomarge">Droits, licences et spécifications</h3>
        </div>

        <div className="flex-item">

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



    </div>
  );
};

export default AboutUs;

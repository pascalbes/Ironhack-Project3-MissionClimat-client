import React from "react";

import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { faGavel } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import Header from "components/partials/Header";
import ReactGA from "react-ga";

import "styles/about.css";

export const AboutUs = () => {
  function handleClickTracking(type) {
    ReactGA.event({
      category: "Click",
      action: type,
    });
  }

  return (
    <div className="about-page flex-item flex-column light-text">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mission Climat / A propos</title>
        <meta
          name="description"
          content="Description du projet Mission Climat : historique, équipe, droits et licence, cgu et remerciements"
        />
        <link rel="canonical" href="http://mission-climat.io/about/" />
      </Helmet>
      <Header />

      <div className="about-nav flex-item full-width">
        <div className="flex-column">
          <a href="#about-history">
            <div className="about-chapter-selection">
              <FontAwesomeIcon className="about-icon nav-about-img" icon={faHistory} />
              <br />
              <span>Historique du projet</span>
            </div>
          </a>
        </div>

        <div className="flex-column">
          <a href="#about-team">
            <div className="about-chapter-selection">
              <img className="nav-about-img" src="../../images/logo/Team.svg" alt="Logo Equipe" />
              <br />
              <span>L'équipe et partenaires</span>
            </div>
          </a>
        </div>

        <div className="flex-column">
          <a href="#about-law">
            <div className="about-chapter-selection">
              <FontAwesomeIcon className="about-icon nav-about-img" icon={faGavel} />
              <br />
              <span>Droits, licences et specs.</span>
            </div>
          </a>
        </div>

        <div className="flex-column">
          <a href="#about-cgu">
            <div className="about-chapter-selection">
              <FontAwesomeIcon className="about-icon nav-about-img" icon={faHandshake} />
              <br />
              <span>CGU : liberté et réciprocité</span>
            </div>
          </a>
        </div>
      </div>

      <section id="about-history" className="about-card flex-item flex-column">
        <div className="about-card-head flex-item margeup">
          <FontAwesomeIcon className="about-icon" icon={faHistory} />
          <h3 className="nomarge">Historique du Projet</h3>
        </div>
        <h5>L'étude 1.5 de BL évolution / Février 2019</h5>
        <p>
          Ce projet débute en février 2019 avec la publication de l'étude
          <i>
            <b>
              « Comment la France peut s’aligner sur une trajectoire compatible avec les 1,5°C »
            </b>
          </i>
          par B&L évolution. S’appuyant sur les données du rapport «
          <u>
            <i>
              <b>
                <a
                  href="https://www.ipcc.ch/site/assets/uploads/sites/2/2019/09/IPCC-Special-Report-1.5-SPM_fr.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réchauffement planétaire de 1,5°C
                </a>
              </b>
            </i>
          </u>
          » du <b>GIEC</b>, l’étude donne à voir l'importance des mesures à mettre en place pour
          réduire les émissions de gaz à effet de serre de la France et s’aligner sur les
          recommandations du GIEC.
        </p>

        <div id="about-articles" className="flex-item">
          <div className="flex-item flex-column">
            <a
              target="_blank"
              href="http://bl-evolution.com/portfolio/comment-saligner-sur-une-trajectoire-compatible-avec-les-15c/"
              rel="noopener noreferrer"
              onClick={() => handleClickTracking("BLStudy")}
            >
              <img src="/images/about/etude BL - vert.svg" alt=" " />
            </a>
            <p>Etude 1.5 de BL évolution</p>
          </div>

          <div className="flex-item flex-column">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reporterre.net/Rester-sous-les-1-5-oC-voici-comment-nos-vies-pourraient-changer"
              onClick={() => handleClickTracking("tribuneReporterre")}
            >
              <img src="/images/about/megaphone - vert.svg" alt=" " />
            </a>
            <p>Tribune dans Reporterre</p>
          </div>

          <div className="flex-item flex-column">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reporterre.net/Climat-rester-sous-la-barre-de-1-5-oC-impose-des-choix-radicaux-sur-la"
              onClick={() => handleClickTracking("articleReporterre")}
            >
              <img src="/images/about/liens articles - vert.svg" alt=" " />
            </a>
            <p>Article de Reporterre</p>
          </div>

          <div className="flex-item flex-column">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.novethic.fr/actualite/environnement/climat/isr-rse/infographie-interdiction-d-acheter-une-voiture-neuve-ou-de-prendre-un-long-courrier-couvre-feu-thermique-quotas-sur-les-produits-importes-les-mesures-chocs-pour-rester-sous-1-5-c-146877.html"
              onClick={() => handleClickTracking("articleNovethic")}
            >
              <img src="/images/about/liens articles - vert.svg" alt=" " />
            </a>
            <p>Article de Novethic</p>
          </div>

          <div className="flex-item flex-column">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.marianne.net/societe/rechauffement-climatique-scenario-noir"
              onClick={() => handleClickTracking("articleMarianne")}
            >
              <img src="/images/about/liens articles - vert.svg" alt=" " />
            </a>
            <p>Article de Marianne</p>
          </div>
        </div>

        <iframe
          width="560"
          height="315"
          title="Présentation de l'étude 1.5°C par Brut"
          src="https://www.youtube.com/embed/iCDYAunYQFA"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="frame-legend">Présentation de l'étude 1.5°C par Brut</p>

        <h5>Développement maquette @Ironhack Paris / Février 2020</h5>
        <p>
          En janvier 2020, Guillaume Martin, l'un des 2 co-auteurs de l'étude, et Pascal Besson
          décident de démocratiser et valoriser ce modèle autour d'un simulateur web. Une
          <b>
            maquette est développée en 2 semaines pour le projet final du bootcamp
            <u>
              <a href="https://www.ironhack.com/fr/paris" target="_blank" rel="noopener noreferrer">
                Ironhack Paris
              </a>
            </u>
          </b>
          avec Nina Gautreau et Paul Carillion. En parallèle, Charles-Adrien Louis, Célian Niclot et
          Guillaume Martin simplifient et améliorent le modèle pour le rendre accessible au public.
          Le projet est finalement honoré en étant
          <b>
            élu meilleur projet web par la promotion de dev web puis lors du hackshow du 9 mars de
            Ironhack
          </b>
          . Champagne !
        </p>

        <h5>Développement Mission Climat / Avril 2020</h5>
        <p>
          Après un court repos une petite équipe est montée pour finaliser le projet. Oriana
          Berthomieu définit l'UI finale et Emmanuel Bernard rejoint Pascal et Nina pour finaliser
          le développement, alors que nous avons la chance d'être accompagnés par le
          <u>
            <b>
              <a href="https://inno3.fr/" target="_blank" rel="noopener noreferrer">
                cabinet inno3
              </a>
            </b>
          </u>
          pour définir les droits et licences associés au projet.
          <b>Le site sort enfin le lundi 4 mai 2020</b>, au grand bonheur de tout ce joli monde, et
          nous l'espérons, au vôtre également !
        </p>

        <h5>Mission Transition / Mai 2020 ></h5>
        <p>
          L'équipe a de grandes ambitions pour développer ce projet. On vous en dit plus
          <b>
            <u>
              <a href="/contribuer">ici</a>
            </u>
          </b>
          !
        </p>
      </section>

      <section className="about-card flex-item flex-column">
        <article id="about-team" className="about-card-lead flex-item flex-column">
          <div className="about-card-head flex-item">
            <img className="team-logo" src="/images/logo/Team.svg" alt="Logo Equipe" />
            <h3 className="nomarge">L'équipe</h3>
          </div>

          <p>
            L'ensemble de l'équipe s'est investie bénévolement. <br />
            Vous souhaitez contribuer à cette aventure, ou la soutenir ?
            <b>
              <u>
                <a href="/contact">Contactez-nous !</a>
              </u>
            </b>
          </p>

          <h5>Pilotage Projet</h5>

          <div className="flex-item about-team-section">
            <div className="dev-team">
              <a
                className="dev-box-img"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/pascal-besson/"
              >
                <img className="linkedin" src="/images/logo/linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                className="dev-box-name"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/pascal-besson/"
              >
                Pascal Besson
                <img className="dev-box-logo" src="/images/logo/Pascal-logo.svg" alt="Logo PB" />
              </a>
              <p className="dev-box-desc">Ingénieur / RSE / Développeur Fullstack</p>
              <p className="dev-box-role">
                Rôle : Pilotage projet, conception site, développement front et back
              </p>
            </div>

            <div className="dev-team">
              <a
                className="dev-box-img"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/guillaume-martin-86662989/"
              >
                <img className="linkedin" src="/images/logo/linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                className="dev-box-name"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/guillaume-martin-86662989/"
              >
                Guillaume Martin
                <img className="dev-box-logo" src="../../images/logo/BLevo.png" alt="Logo B&L" />
              </a>
              <p className="dev-box-desc">Expert Energie-Climat à B&L évolution</p>
              <p className="dev-box-role">Rôle : Pilotage projet, définition modèle émissions</p>
            </div>
          </div>

          <h5>Data : modèle de calcul des émissions</h5>

          <p>Le modèle de calcul a été réalisé par B&L Évolution.</p>

          <div className="flex-item about-team-section">
            <div className="dev-team">
              <a
                className="dev-box-img"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/charles-adrien-louis-63863526/"
              >
                <img className="linkedin" src="/images/logo/linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                className="dev-box-name"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/charles-adrien-louis-63863526/"
              >
                Charles-Adrien Louis
                <img className="dev-box-logo" src="/images/logo/BLevo.png" alt="Logo B&L" />
              </a>
              <p className="dev-box-desc">Co-fondateur et co-gérant B&L Évolution</p>
              <p className="dev-box-role">Rôle : définition modèle émissions</p>
            </div>

            <div className="dev-team">
              <a
                className="dev-box-img"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/c%C3%A9lian-niclot/"
              >
                <img className="linkedin" src="/images/logo/linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                className="dev-box-name"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/c%C3%A9lian-niclot/"
              >
                Célian Niclot
                <img className="dev-box-logo" src="/images/logo/BLevo.png" alt="Logo B&L" />
              </a>
              <p className="dev-box-desc">Consultant Energie-Climat à B&L Évolution</p>
              <p className="dev-box-role">Rôle : définition modèle émissions</p>
            </div>
          </div>

          <h5>Développement, UX/UI</h5>

          <div className="flex-item about-team-section">
            <div className="dev-team">
              <a
                className="dev-box-img"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ninagautreau/"
              >
                <img className="linkedin" src="/images/logo/linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                className="dev-box-name"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ninagautreau/"
              >
                Nina Gautreau
                <img
                  className="dev-box-logo"
                  src="/images/logo/Nina-logo.svg"
                  alt="Logo Nina Gautreau"
                />
              </a>
              <p className="dev-box-desc">Teacher Assistant / Développeuse Fullstack</p>
              <p className="dev-box-role">Rôle : Développement front, UX-UI</p>
            </div>

            <div className="dev-team">
              <a
                className="dev-box-img"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/oriana-berthomieu-3baa1431/"
              >
                <img className="linkedin" src="/images/logo/linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                className="dev-box-name"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/oriana-berthomieu-3baa1431/"
              >
                Oriana Berthomieu
              </a>
              <p className="dev-box-desc">Product designer</p>
              <p className="dev-box-role">Rôle : UI</p>
            </div>

            <div className="dev-team">
              <a
                className="dev-box-img"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/emmbernard/"
              >
                <img className="linkedin" src="/images/logo/linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                className="dev-box-name"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/emmbernard/"
              >
                Emmanuel Bernard
              </a>
              <p className="dev-box-desc">Entrepreneur / Développeur Fullstack</p>
              <p className="dev-box-role">Rôle : Développement front, déploiement</p>
            </div>

            <div className="dev-team">
              <a
                className="dev-box-img"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/paul-carillion-3826041a1/"
              >
                <img className="linkedin" src="/images/logo/linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                className="dev-box-name"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/paul-carillion-3826041a1/"
              >
                Paul Carillon
              </a>
              <p className="dev-box-desc">Développeur Fullstack</p>
              <p className="dev-box-role">Rôle : développement front et back</p>
            </div>
          </div>

          {/* <h5>Equipe tests</h5>
          <p>Tom Nico, Estelle Payan, Pacco Bailly</p> */}
        </article>

        <div className="separator"></div>
        <div className="separator"></div>

        <article className="about-card-lead flex-item flex-column">
          <div className="about-card-head flex-item">
            <img className="team-logo" src="/images/logo/BLevo.png" alt="Logo B&L" />
            <h3 className="nomarge">B&L Évolution</h3>
          </div>
          <p>
            B&L Évolution est co-auteur de ce site et auteur du modèle de calcul utilisé, et partagé
            selon les modalités présentées à la section "Droits et licences".
          </p>
          <p>
            <b>Présentation du cabinet : </b>les entreprises et territoires qui ont l’ambition de se
            développer de manière durable font confiance à l'équipe d’experts de B&L évolution
            depuis plus de 9 ans. B&L évolution est un bureau d’études et de conseils en
            développement durable. Au service de la société, cette équipe engagée souhaite diffuser
            une vision résiliente de l’aménagement des territoires et du développement des
            entreprises en associant une vision fortement participative à une prise de conscience
            réaliste et éclairée des enjeux du XXIe siècle.
          </p>
          <a
            className="link-team-about"
            target="_blank"
            rel="noopener noreferrer"
            href="http://bl-evolution.com/"
          >
            <img src="/images/logo/Web.svg" alt="LinkedIn " />
            bl-evolution.com
          </a>

          <div className="separator"></div>
          <div className="separator"></div>

          <div className="about-card-head flex-item ac">
            <img className="team-logo" src="/images/logo/AC.png" alt="Logo Avenir Climatique" />
            <h3 className="nomarge">Avenir Climatique</h3>
          </div>
          <p>L'association Avenir Climatique a eu plusieurs rôles sur le projet Mission Climat :</p>
          <ul>
            <li>
              Elle a d'abord été un lieu de rencontre, pour Guillaume Martin, Pascal Besson et
              Emmanuel Bernard, en particulier sur le projet
              <u>
                <b>
                  <a href="https://www.educlimat.fr/" rel="noopener noreferrer" target="_blank">
                    ÉduClimat
                  </a>
                </b>
              </u>
              pour ces 2 derniers,
            </li>
            <li>
              Elle a été d'une aide précieuse pour tester le site et proposer des corrections, des
              évolutions. Pour cela
              <b>un énorme merci à Tom Nico, Estelle Payan, Pacco Bailly, Gaëlle Leloup,</b>
            </li>
            <li>
              Elle a enfin fourni la majeure partie des textes disponibles à la page "Concept".
            </li>
          </ul>

          <p>
            <b>Présentation de l'association : </b>
            Avenir Climatique a pour objectif de faire des enjeux énergie / climat une priorité
            nationale en formant les citoyens et citoyennes. L'association développe des actions de
            sensibilisation et de formation adaptées et attractives pour tous les publics (MOOC,
            Conférences, jeux de société...) Elle permet à toutes et tous de monter en compétences
            sur le fond (savoirs techniques et scientifiques) et sur la forme (diffusion du message,
            accompagnement au changement, esprit critique...) Dans son fonctionnement au quotidien,
            elle promeut et expérimente afin de pousser à un maximum d'exemplarité (baisse de
            l'empreinte carbone, inclusion, fonctionnement holacratique...)
          </p>
          <a
            className="link-team-about"
            target="_blank"
            rel="noopener noreferrer"
            href="https://avenirclimatique.org/"
          >
            <img src="/images/logo/Web.svg" alt="LinkedIn " />
            avenirclimatique.org
          </a>
        </article>
      </section>

      <article className="about-card flex-item flex-column">
        <div id="about-law" className="about-card-head flex-item">
          <FontAwesomeIcon className="about-icon" icon={faGavel} />
          <h3 className="nomarge">Droits, licences et spécifications</h3>
        </div>

        <div id="about-law-box" className="flex-item between">
          <div>
            <h5>Site Mission Climat</h5>
            <img src="./images/logo/agplv3-with-text-162x68.png" alt=""></img>
            <br></br>
            <p>Simulateur de scénario climat à l'échelle nationale à visée éducative</p>
            <p>
              <b>
                Copyright (C) 2020 Pascal Besson, Nina Gautreau, Oriana Berthomieu, BL Evolution
              </b>
            </p>

            <p>
              <b>This program is free software</b>: you can redistribute it and/or modify it under
              the terms of the GNU Affero General Public License as published by the Free Software
              Foundation, either version 3 of the License, or (at your option) any later version.
            </p>

            <p>
              This program is distributed in the hope that it will be useful, but WITHOUT ANY
              WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
              PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
            </p>

            <a href="./agpl-3.0.txt" target="_blank" rel="noopener noreferrer">
              <b>
                <u>Copie de licence</u>
              </b>
            </a>

            <br></br>
            <br></br>
            <p>Repo Github </p>
            <ul>
              <li>
                <u>
                  <b>
                    <a
                      href="https://github.com/pascalbes/Ironhack-Project3-MissionClimat-client"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleClickTracking("repoFront")}
                    >
                      Front-End
                    </a>
                  </b>
                </u>
              </li>
              <li>
                <u>
                  <b>
                    <a
                      href="https://github.com/pascalbes/Ironhack-Project3-MissionClimat-server"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleClickTracking("repoBack")}
                    >
                      Back-End
                    </a>
                  </b>
                </u>
              </li>
            </ul>

            <br></br>
            <br></br>
            <p>Spécifications :</p>
            <ul>
              <li>Stack : React, NodeJS</li>
              <li>APIs : Google Sheet, Google Drive</li>
              <li>Librairies : rechart, material UI</li>
            </ul>

            <a href="/licenses" target="_blank" rel="noopener noreferrer">
              <p>
                <u>
                  <b>Droits et licenses des composants utilisés sur ce site</b>
                </u>
              </p>
            </a>
          </div>

          <div>
            <h5>Modèle de calcul des émissions</h5>
            <img src="./images/logo/agplv3-with-text-162x68.png" alt=""></img>
            <br></br>

            <p>
              Modèle de calcul des émissions de gaz à effet de serre de la France, avec projection
              mondiale
            </p>
            <p>
              <b>Copyright (C) 2020 BL Evolution</b>
            </p>

            <p>
              <b>This program is free software</b>: you can redistribute it and/or modify it under
              the terms of the GNU Affero General Public License as published by the Free Software
              Foundation, either version 3 of the License, or (at your option) any later version.
            </p>

            <p>
              This program is distributed in the hope that it will be useful, but WITHOUT ANY
              WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
              PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
            </p>

            <u>
              <b>
                <a href="./agpl-3.0.txt" target="_blank" rel="noopener noreferrer">
                  Copie de licence
                </a>
              </b>
            </u>

            <br></br>
            <br></br>
            <p>Modèle de données</p>
            <p>
              <u>
                <b>
                  <a
                    href="./2020-04-09_Scenario1.5.xlsx"
                    rel="noopener noreferrer"
                    download
                    onClick={() => handleClickTracking("modelDownloadAbout")}
                  >
                    Téléchargement
                  </a>
                </b>
              </u>
            </p>
          </div>
        </div>
      </article>

      <article id="about-cgu" className="about-card flex-item flex-column">
        <div className="about-card-head flex-item">
          <FontAwesomeIcon className="about-icon" icon={faHandshake} />
          <h3 className="nomarge">Conditions Générales d'Utilisation : liberté et réciprocité</h3>
        </div>

        <div className="flex-item">
          <div>
            <h5>Liberté</h5>

            <p>Le site est mis à disposition gratuitement, pour tout usage :</p>
            <ul>
              <li>
                évidemment pour <b>tout usage personnel</b>,
              </li>
              <li>
                dans le cadre d'un <b>atelier de formation ou d'un cours</b>, rémunéré ou non,
              </li>
              <li>etc.</li>
            </ul>

            <h5>Réciprocité</h5>
            <p>
              Dans l'équipe Mission Climat, nous sommes attachés à cette notion, et sa cousine "don
              / contre don" (poke Alain Caillé). Elle permet de fabriquer du commun en engageant un
              cycle vertueux :
            </p>
            <ul>
              <li>
                nous <b>donnons</b> du temps et de l'énergie pour vous fournir un outil utile,
              </li>
              <li>
                vous le <b>recevez</b> et l'utilisez,
              </li>
              <li>
                vous <b>rendez</b>, dans la mesure de votre possible,
              </li>
              <li>
                nous recevons votre contribution en retour et pouvons améliorer l'outil, mis à
                disposition de tous.
              </li>
            </ul>

            <h5>Retours bienvenus</h5>

            <p>Nous accueillerons avec plaisir tout type de retour ! Vous pouvez par exemple :</p>
            <ul>
              <li>
                <b>partager le projet autour de vous</b>, l'utiliser pour animer des ateliers de
                sensibilisation, d'accompagnement au changement, etc,
              </li>
              <li>
                nous <b>dire ce que vous en pensez</b>, partager vos idées pour l'améliorer,
              </li>
              <li>
                <b>contribuer</b> à son développement,
              </li>
              <li>
                <b>
                  <u>
                    <a
                      href="https://www.helloasso.com/associations/avenir-climatique/formulaires/3/widget"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      donner à l'association Avenir Climatique
                    </a>
                  </u>
                </b>
                pour soutenir leur action et le développement de ce projet.
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article id="about-thanks" className="about-card flex-item flex-column">
        <div className="about-card-head flex-item">
          <FontAwesomeIcon className="about-icon" icon={faHandHoldingHeart} />
          <h3 className="nomarge">Remerciements</h3>
        </div>
        <ul>
          <li>
            <span>Ironhack Paris</span> pour nous avoir accompagnés tout le long du bootcamp dans la
            préparation puis le développement de la maquette de ce projet, avec des remerciements
            particuliers à Katya, Guillaume, Franck, PH, Clara et Tatijana.
          </li>
          <li>
            <span>Simon Durning</span> pour ses conseils en direction de projet web.
          </li>
          <li>
            <span>Ingrid Thonet, Cédric Bernoux et Pierre-Etienne Delfly</span> pour leurs regards
            avisés UX/UI.
          </li>
          <li>
            <span>Pauline Gautreau</span> pour la création de notre logo.
          </li>
          <li>
            <span>Minh Cuong Le Quan</span> pour les multiples versions futures que ses idées
            alimentent.
          </li>
        </ul>
      </article>

      <img className="about-img" src="/images/team.svg" alt="landing-visual" />
    </div>
  );
};

export default AboutUs;

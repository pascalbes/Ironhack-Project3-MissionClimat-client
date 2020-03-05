import React from 'react'
import "../styles/about.css"

import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutUs = () => {
    return (
        <div className="about-page flex-item flex-column">
            <article className="about-card about-conception border-btn light flex-item flex-column">
                <div className="about-card-head flex-item">
                    <FontAwesomeIcon className="about-icon" icon={faBookmark}/>
                    <h3 className="nomarge">Conception</h3>
                </div>
                <p>Mission Climat, c'est d'abord un travail d'équipe. 
Le projet a été réalisé par une équipe de 5 personnes, toutes bénévoles, et a bénéficié des éclairages de nombreux amis. En Octobre 2018, le Groupe d’Experts Intergouvernemental sur l’Evolution du Climat (GIEC) publiait un rapport spécial intitulé «Réchauffement planétaire de 1,5 °C» qui invitait l’ensemble des états à s’aligner sur une trajectoire limitant le réchauffement climatique à 1,5°C pour éviter au maximum ses conséquences dramatiques pour l’humanité. 
                </p>
                <p>S’appuyant sur les données scientifiques contenues dans ce rapport, cabinet de conseil B&L évolution a publié une étude intitulée «Comment la France peut s’aligner sur une trajectoire compatible avec les 1,5°C». L’objectif de cette étude était de donner à voir les mesures concrètes qui permettraient en ordre de grandeur de faire suffisamment baisser les émissions de gaz à effet de serre de la France pour s’aligner sur les recommandations des scientifiques du GIEC. 
                En 2019, la rencontre entre Guillaume, co-auteur de l’étude et Pascal, Paul et Nina, jeunes développeurs engagés a donné vie à ce site internet permettant à chaque citoyen·ne de construire son propre scénario climat. 
                </p>
            </article>

            <section className="about-lead-team flex-item">
                
            <article className="about-card about-card-lead border-btn light flex-item flex-column">
                    <div className="about-card-head flex-item">
                        <img className="team-logo" src="../../images/logo/logoIH.svg" alt="Logo Ironhack"/>
                        <h3 className="nomarge">Développeurs</h3>
                    </div>

                    <p>Mission Climat a été développé en 2 semaines par 3 étudiants du bootcamp Ironhack Paris, dans le cadre du projet de fin d'étude.</p>
                    <p>Stack : JS / React / NodeJS / Mongoose
                        <br/>API : Google Sheet et Drive
                    <br/>Librairies : rechart, nivo, material UI</p>

                    <p>Pascal Besson
                        <br/>Formation : Ingénieur / Master RSE / Dev Fullstack
                    <br/>Rôle : chef de projet, dev back & front</p>

                    <p>Paul est derrière tous nos graphiques</p>

                    <p>Nina Gautreau
                        <br/>Formation : Dev Fullstack après 7 ans dans la mode et le luxe
                    <br/>Rôle : charte graphique, dev front</p>

                    <div className="about-links flex-item">
                        <a target="_blank" href="https://www.linkedin.com/in/pascal-besson/">Pascal Besson</a>
                        <a target="_blank" href="https://www.linkedin.com/in/paul-carillion-3826041a1/">Paul Carillon</a>
                        <a target="_blank" href="https://www.linkedin.com/in/ninagautreau/">Nina Gautreau</a>
                    </div>
                </article>
                
                <article className="about-card about-card-lead border-btn light flex-item flex-column">
                    <div className="about-card-head flex-item">
                        <img className="team-logo" src="../../images/logo/BLevo.png" alt="Logo B&L"/>
                        <h3 className="nomarge">B&L Évolution</h3>
                    </div>
                    <p>Les entreprises et territoires qui ont l’ambition de se développer de manière durable font confiance à l'équipe d’experts de B&L évolution depuis plus de 9 ans. B&L évolution est un bureau d’études et de conseils en développement durable. Au service de la société, cette équipe engagée souhaite diffuser une vision résiliente de l’aménagement des territoires et du développent des entreprises en associant une vision fortement participative à une prise de conscience réaliste et éclairée des enjeux du XXIe siècle.</p>
                    <p>Consultant énergie climat et mobilités au sein de B&L évolution, Guillaume accompagne des entreprises et des territoires dans leur transition écologique. Ingénieur (Grenoble INP - ENSE3) il est aussi membre actif de l'association Avenir Climatique et co-auteur avec Charles-Adrien Louis de l'étude B&L évolution "Comment la France peut s'aligner sur une trajectoire compatible avec les 1,5°C" publiée en 2019. </p>
                    <p>Célian Niclot a de la fièvre.</p>
                    <div className="about-links flex-item">
                        <a target="_blank" href="https://bl-evolution.com/">Site internet</a>
                    </div>
                </article>
            </section>

            <article className="about-card border-btn light flex-item flex-column">
                <div className="about-card-head flex-item">
                    <img className="team-logo" src="../../images/logo/AC.png" alt="Logo Avenir Climatique"/>
                    <h3 className="nomarge">Avenir climatique</h3>
                </div>
                <p>L'association Avenir Climatique a pour objectif de faire des enjeux énergie / climat une priorité nationale en formant les citoyens et citoyennes. L'association développe des actions de sensibilisation et de formation adaptées et attractives pour tous les publics (MOOC, Conférences, jeux de société...) Elle permet à toutes et tous de monter en compétences sur le fond (savoirs techniques et scientifiques) et sur la forme (diffusion du message, accompagnement au changement, esprit critique...) Dans son fonctionnement au quotidien, elle promeut et expérimente afin de pousser à un maximum d'exemplarité (baisse de l'empreinte carbone, inclusion, fonctionnement holacratique...) </p>
                <p>Merci à Estelle, Pacco, Baptise, Gaëlle...</p>
                <div className="about-links flex-item">
                    <a target="_blank" href="https://avenirclimatique.org/">Site internet</a>
                </div>
            </article>

            <article className="about-card border-btn light flex-item flex-column">
                <div className="about-card-head flex-item">
                    <FontAwesomeIcon className="about-icon" icon={faHandHoldingHeart}/>
                    <h3 className="nomarge">Remerciements</h3>
                </div>
                <ul>
                    <li><span>Ironhack</span> pour nous avoir accompagnés tout le long du bootcamp dans la préparation puis le développement de ce projet, avec des remerciements particuliers à Katya, Guillaume, Franck, PH, Clara et Tatijana.</li>
                    <li><span>Simon Durning</span> pour ses conseils en direction de projet web.</li>
                    <li><span>Emmanuel Bernard</span> pour ses conseils et en particulier celui déterminant de travailler avec un modèle calculatoire externalisé.</li>
                    <li><span>Ingrid Thonet, Cédric Bernoux et Pierre-Etienne Delfly</span> pour leurs regards avisés UX/UI.</li>
                    <li><span>Pauline Gautreau</span> pour avoir créé notre logo.</li>
                    <li><span>Minh Cuong Le Quan</span> pour les multiples versions futures que ses idées alimentent.</li>
                </ul>
            </article>
        </div>
    )
}

export default AboutUs
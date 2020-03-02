import React from 'react'
import "../styles/about.css"

import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AboutUs = () => {
    return (
        <div className="about-page flex-item flex-column">
            <article className="about-card about-conception border-btn light flex-item flex-column">
                <div className="about-card-head flex-item">
                    <FontAwesomeIcon className="about-icon" icon={faBookmark}/>
                    <h3 className="nomarge">Conception</h3>
                </div>
                <p>Mission 1.5°C, c'est d'abord un travail d'équipe.</p>
            </article>
            
            <article className="about-card border-btn light flex-item flex-column">
                <div className="about-card-head flex-item">
                    <img className="team-logo" src="../../images/logo/AC.png" alt=""/>
                    <h3 className="nomarge">Avenir climatique</h3>
                </div>
                <p>Avenir Climatique, c'est une association</p>
                <p></p>
                <div className="about-links flex-item">
                    <a href="https://avenirclimatique.org/">Site internet</a>
                </div>
            </article>

            <article className="about-card border-btn light flex-item flex-column">
                <div className="about-card-head flex-item">
                    <img className="team-logo" src="../../images/logo/BLevo.png" alt=""/>
                    <h3 className="nomarge">B&L Évolution</h3>
                </div>
                <p>B&L Évolution est un bureau d'étude en développement durable.</p>
                <p></p>
                <div className="about-links flex-item">
                    <a href="https://bl-evolution.com/">Site internet</a>
                </div>
            </article>

            <article className="about-card border-btn light flex-item flex-column">
                <div className="about-card-head flex-item">
                    <img className="team-logo" src="../../images/logo/logoIH.svg" alt=""/>
                    <h3 className="nomarge">Pascal Besson, Paul Carillon & Nina Gautreau</h3>
                </div>
                <p>Pascal est un super leader</p>
                <p>Paul est derrière tous nos graphiques</p>
                <p>Nina aime les gradients</p>
                <p>Au sein de la promotion Développement Web à Ironhack, ces trois personnes ont développé le site internet de Mission 1.5°C.</p>
                <div className="about-links flex-item">
                    <div className="flex-item">
                        <a href="">Pascal Besson</a>
                        <a href="">Projet</a>
                    </div>
                    <div className="flex-item">
                        <a href="">Paul Carillon</a>
                        <a href="">Projet</a>
                    </div>
                    <div className="flex-item">
                        <a href="">Nina Gautreau</a>
                        <a href="">Projet</a>
                    </div>
                </div>
            </article>

            <article className="about-card border-btn light flex-item flex-column">
                <div className="about-card-head flex-item">
                    <img className="team-logo" src="../../images/logo/GIEC.svg" alt=""/>
                    <h3 className="nomarge">Le GIEC</h3>
                </div>
                <p>Le Groupe d’experts intergouvernemental sur l’évolution du climat (GIEC), c'est un organisme intergouvernemental et scientifique ayant pour mission d'évaluer le changement climatique, ses effets potentiels sur l'environnement et la société, ainsi que les solutions envisageables pour y remédier.</p>
                <p>C'est le GIEC qui a publié les chiffres sur lesquels se base notre simulateur.</p>
                <div className="about-links flex-item">
                    <a href="https://www.ipcc.ch/languages-2/francais/">Site internet</a>
                </div>
            </article>
        </div>
    )
}

export default AboutUs
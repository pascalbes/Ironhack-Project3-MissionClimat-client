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
                <p>Mission 1.5°C, c'est d'abord un travail d'équipe.</p>
            </article>

            <section className="about-lead-team flex-item">
                
            <article className="about-card about-card-lead border-btn light flex-item flex-column">
                    <div className="about-card-head flex-item">
                        <img className="team-logo" src="../../images/logo/logoIH.svg" alt="Logo Ironhack"/>
                        <h3 className="nomarge">Pascal Besson, Paul Carillon & Nina Gautreau</h3>
                    </div>
                    <p>Pascal est un super leader</p>
                    <p>Paul est derrière tous nos graphiques</p>
                    <p>Nina aime les gradients</p>
                    <p>Au sein de la promotion Développement Web à Ironhack, ces trois personnes ont développé le site internet de Mission 1.5°C.</p>
                    <div className="about-links flex-item">
                        <a href="">Pascal Besson</a>
                        <a href="">Paul Carillon</a>
                        <a href="">Nina Gautreau</a>
                    </div>
                </article>
                
                <article className="about-card about-card-lead border-btn light flex-item flex-column">
                    <div className="about-card-head flex-item">
                        <img className="team-logo" src="../../images/logo/BLevo.png" alt="Logo B&L"/>
                        <h3 className="nomarge">B&L Évolution</h3>
                    </div>
                    <p>B&L Évolution est un bureau d'étude en développement durable.</p>
                    <p>Guillaume Martin est consultant et ingénieur en énergie-climat.</p>
                    <p>Célian Niclot a de la fièvre.</p>
                    <p>Grâce à eux, </p>
                    <div className="about-links flex-item">
                        <a href="https://bl-evolution.com/">Site internet</a>
                    </div>
                </article>
            </section>

            <article className="about-card border-btn light flex-item flex-column">
                <div className="about-card-head flex-item">
                    <img className="team-logo" src="../../images/logo/AC.png" alt="Logo Avenir Climatique"/>
                    <h3 className="nomarge">Avenir climatique</h3>
                </div>
                <p>Avenir Climatique, c'est une association</p>
                <p>Ils organisent des causeries.</p>
                <div className="about-links flex-item">
                    <a href="https://avenirclimatique.org/">Site internet</a>
                </div>
            </article>

            <article className="about-card border-btn light flex-item flex-column">
                <div className="about-card-head flex-item">
                    <FontAwesomeIcon className="about-icon" icon={faHandHoldingHeart}/>
                    <h3 className="nomarge">Remerciements</h3>
                </div>
                <ul>
                    <li><span>Pauline Gautreau</span> pour avoir créé notre logo</li>
                </ul>
            </article>
        </div>
    )
}

export default AboutUs
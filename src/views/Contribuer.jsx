import React from 'react'
import "../styles/contribuer.css"
import Header from "../components/partials/Header";

const Contribuer = () => {
    return (
        <div className="form-page flex-item flex-column light-text">
            <Header/>
            <div id="contribuer" className="margeup">

                <div className="flex-item flex-column">
                    <h3>Rejoignez l'aventure Mission Climat</h3>
                    <h5>contact@mission-climat.io</h5>
                </div>

                <p>Le projet Mission Climat n'en est qu'à ses débuts : l'équipe porte de belles ambitions pour les développements futurs. Les profils recherchés et les évolutions prévues sont esquissés à la suite. Si vous souhaitez en savoir davantage et rejoindre l'aventure, contactez-nous !</p>

                <section className="flex-item">

                    <div className="home-item flex-item flex-column light-text">
                        <div className="home-card-head flex-item">
                            <img
                            className="team-logo"
                            src="../../images/home/ampoule - vert.svg"
                            alt="Logo Ironhack"
                            />
                            <h4 className="nomarge">Contributions bienvenues</h4>
                        </div>
                        <h5>Développeurs</h5>
                        <p>blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla </p>
                        <h5>Experts</h5>
                        <p>blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla </p>
                        <h5>Financeurs</h5>
                        <p>blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla </p>
                    </div>


                    <div className="home-item flex-item flex-column light-text">
                        <div className="home-card-head flex-item">
                            <img
                            className="team-logo"
                            src="../../images/home/interrogation - vert.svg"
                            alt="Logo Ironhack"
                            />
                            <h4 className="nomarge">Mission Climat demain</h4>
                        </div>
                        <h5>+ de co-bénéfices</h5>
                        <p>blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla </p>

                        <h5>+ de jeu</h5>
                        <p>blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla </p>

                        <h5>+ de passage à l'action</h5>
                        <p>blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla </p>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Contribuer

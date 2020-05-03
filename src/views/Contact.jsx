import React from 'react'
import ContactForm from "../components/form/Contact"
import "../styles/contribuer.css"
import Header from "../components/partials/Header";

const Contact = () => {
    return (
        <div className="form-page flex-item flex-column light-text">
            <Header/>
            <div className="margeup contribuer">

                <div className="contribuer-title flex-item flex-column">
                    <h3>Contactez l'équipe</h3>
                    <h5>contact@mission-climat.io</h5>
                </div>

                <div id="contact-newsletter">
                    <h5>Être informé des évolutions de Missions Climat</h5>
                    <p>Partagez votre email et cette information ponctuelle sera le seul usage que nous en aurons.
                    </p>
                    <form action="test">
                        <label>Email</label>
                        <input type="email" name="email"/>
                        <input type="submit" value="Partager" />
                    </form>
                </div>

                <section id="contact-form" className="flex-item">

                    <div className="flex-item flex-column light-text">
                        <div className="flex-item contact-title">
                            <img src="../../../images/logo/Qna.svg" alt=""/>
                            <h6>Corrections</h6>
                        </div>
                        <p>Vous souhaitez nous faire part d'une erreur, d'un bug trouvé sur le site ?</p>
                        <p><b>contact@mission-climat.io</b></p>
                        <div className="flex-item contact-title">
                            <img src="../../../images/logo/Idea.svg" alt=""/>
                            <h6>Propositions</h6>
                        </div>
                        <p>Vous avez une idée incroyable pour améliorer Misson Climat ?</p>
                        <p><b>contact@mission-climat.io</b></p>
                    </div>


                    <div className="flex-item flex-column light-text">
                        <div className="flex-item contact-title">
                            <img src="../../../images/logo/Enjeux.svg" alt=""/>
                            <h6>Contributions</h6>
                        </div>
                        <p>Vous voulez nous aider à maintenir et créer le futur du site ?</p>
                        <p><b>contact@mission-climat.io</b></p>

                        <div className="flex-item contact-title">
                            <img src="../../../images/about/liens articles - blanc.svg" alt=""/>
                            <h6>S'associer</h6>
                        </div>
                        <p>Vous souhaitez échanger avec l'équipe ou établir un partenariat ?</p>
                        <p><b>contact@mission-climat.io</b></p>
                    </div>
                    
                </section>

                

            </div>

            {/* <h3>Contact</h3>
            <ContactForm/> */}
        </div>
    )
}

export default Contact

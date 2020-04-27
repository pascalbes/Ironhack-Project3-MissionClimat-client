import React, {Component} from 'react';
import axios from 'axios';
require("dotenv").config();

class Contact extends Component {
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const topic = document.getElementById('topic').value;
        const message = document.getElementById('message').value;
        
        axios({
            method: "POST", 
            url:`http://localhost:3000/contact`, // HELP JE SAIS PAS LEQUEL METTRE
            data: {
                name: name,   
                email: email, 
                topic: topic, 
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            // <form id="contact-form" className="form contact-form flex-item flex-column" method="POST" onSubmit={this.handleSubmit.bind(this)}>
            //     <label className="label" htmlFor="name">Votre nom</label>
            //     <input className="input" id="name" type="text" name="name" placeholder="Amy Sion" required/>

            //     <label className="label" htmlFor="email">Votre adresse e-mail</label>
            //     <input className="input" id="email" type="email" name="email" placeholder="example@domaine.com" required/>
    
            //     <label className="label" htmlFor="topic">Que se passe-t-il ?</label>
            //     <select className="input" id="topic" name="topic" placeholder="- Choisissez" required>
            //         <option value="value-bug">J'ai trouvé un bug quelque part</option>
            //         <option value="value-improvement">J'ai une idée pour le futur du site</option>
            //         <option value="value-business">Je suis intéressé(e) pour un partenariat</option>
            //         <option value="value-contribution">Je suis intéressé(e) pour contribuer</option>
            //     </select>
    
            //     <label className="label" htmlFor="message">Votre message</label>
            //     <textarea className="input" id="message" name="message" cols="30" rows="10" placeholder="Tapez ici" required></textarea>
    
            //     <button type="submit" className="green-btn">Envoyer</button>
            // </form>
            <>
                <section className="contact-choices">
                    <div id="bug" className="contactCard flex-item">
                        <div>
                            <img src="../../../images/logo/Qna.svg" alt=""/>
                            <h4>Corriger</h4>
                        </div>
                        <p>Vous avez trouvé un bug sur le site et vous voulez nous en faire part ?</p>
                        <a href="mailto:mission-climat@mail.com?subject=Contact Bug"><button className="green-btn">Signaler un bug</button></a>
                    </div>
                    <div id="suggestion" className="contactCard flex-item">
                        <div>
                            <img src="../../../images/logo/Idea.svg" alt=""/>
                            <h4>Proposer</h4>
                        </div>
                        <p>Vous avez une idée incroyable pour améliorer Misson Climat ?</p>
                        <a href="mailto:mission-climat@mail.com?subject=Contact Suggestion"><button className="green-btn">Proposer une idée</button></a>
                    </div>
                    <div id="contribution" className="contactCard flex-item">
                        <div>
                            <img src="../../../images/logo/Enjeux.svg" alt=""/>
                            <h4>Contribuer</h4>
                        </div>
                        <p>Vous voulez nous aider à maintenir et créer le futur du site ?</p>
                        <a href="mailto:mission-climat@mail.com?subject=Contact Contribution"><button className="green-btn">Offrir mes services</button></a>
                    </div>
                    <div id="partenariat" className="contactCard flex-item">
                        <div>
                            <img src="../../../images/about/liens articles - blanc.svg" alt=""/>
                            <h4>S'associer</h4>
                        </div>
                        <p>Vous souhaitez échanger avec l'équipe ou établir un partenariat ?</p>
                        <a href="mailto:mission-climat@mail.com?subject=Contact Partenariat"><button className="green-btn">Nous contacter</button></a>
                    </div>
                </section>
            </>
        )
    }
}

export default Contact

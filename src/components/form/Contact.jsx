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
            <form id="contact-form" className="form contact-form flex-item flex-column" method="POST" onSubmit={this.handleSubmit.bind(this)}>
                <label className="label" htmlFor="name">Votre nom</label>
                <input className="input" id="name" type="text" name="name" placeholder="Amy Sion" required/>

                <label className="label" htmlFor="email">Votre adresse e-mail</label>
                <input className="input" id="email" type="email" name="email" placeholder="example@domaine.com" required/>
    
                <label className="label" htmlFor="topic">Que se passe-t-il ?</label>
                <select className="input" id="topic" name="topic" placeholder="- Choisissez" required>
                    <option value="value-bug">J'ai trouvé un bug quelque part</option>
                    <option value="value-improvement">J'ai une idée pour le futur du site</option>
                    <option value="value-business">Je suis intéressé(e) pour un partenariat</option>
                    <option value="value-contribution">Je suis intéressé(e) pour contribuer</option>
                </select>
    
                <label className="label" htmlFor="message">Votre message</label>
                <textarea className="input" id="message" name="message" cols="30" rows="10" placeholder="Tapez ici" required></textarea>
    
                <button type="submit" className="green-btn">Envoyer</button>
            </form>
        )
    }
}

export default Contact

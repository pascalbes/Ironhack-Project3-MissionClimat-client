import React from 'react'

const Contact = () => {
    function handleChange(){
        "huhu"
    }

    function handleSubmit(){
        "huhu"
    }

    return (
        <form className="form contact-form flex-item flex-column" onChange={handleChange} onSubmit={handleSubmit}>
            <label className="label" htmlFor="from">Votre adresse e-mail</label>
            <input className="input" id="from" type="email" name="from" placeholder="example@domaine.com" required/>

            <label className="label" htmlFor="subject">Que se passe-t-il ?</label>
            <select className="input" id="objet" name="objet" placeholder="- Choisissez" required>
                <option value="value-bug">J'ai trouvé un bug quelque part</option>
                <option value="value-improvement">J'ai une idée pour le futur du site</option>
                <option value="value-business">Je suis intéressé(e) pour un partenariat</option>
            </select>

            <label className="label" htmlFor="message">Votre message</label>
            <textarea className="input" id="message" name="message" cols="30" rows="10" placeholder="Tapez ici" required></textarea>

            <button className="green-btn">Envoyer</button>
        </form>
    )
}

export default Contact

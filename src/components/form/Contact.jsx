import React from 'react'

const Contact = () => {
    function handleChange(){
        "huhu"
    }

    function handleSubmit(){
        "huhu"
    }

    return (
        <form onChange={handleChange} onSubmit={handleSubmit} className="form">
            <label className="label" htmlFor="from">Votre adresse e-mail</label>
            <input className="input" id="from" type="email" name="from" placeholder="example@domaine.com"/>

            <label className="label" htmlFor="subject">Que se passe-t-il ?</label>
            <select className="input" id="objet" name="objet" placeholder="- Choisissez">
                <option value="value-bug">J'ai trouvé un bug quelque part</option>
                <option value="value-improvement">J'ai une idée pour le futur du site</option>
                <option value="value-business">Je suis intéressé(e) pour un partenariat</option>
            </select>

            <label className="label" htmlFor="message"></label>
            <textarea className="input" id="message" name="message" cols="30" rows="10" placeholder="Votre message"></textarea>

            <button className="btn">Envoyer</button>
        </form>
    )
}

export default Contact

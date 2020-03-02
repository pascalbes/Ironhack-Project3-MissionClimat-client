import React from 'react'

const Signup = () => {
    function handleChange(){
        "huhu"
    }

    function handleSubmit(){
        "huhu"
    }

    return (
        <form className="form contact-form flex-item flex-column" onChange={handleChange} onSubmit={handleSubmit}>
            <label className="label" htmlFor="username">Votre nom d'utilisateur</label>
            <input className="input border-btn" id="username" type="string" name="username" placeholder="Pseudonyme" required/>
            
            <label className="label" htmlFor="email">Votre adresse e-mail</label>
            <input className="input border-btn" id="email" type="email" name="email" placeholder="example@domaine.com" required/>

            <label className="label" htmlFor="password">Votre mot de passe</label>
            <input className="input border-btn" id="password" type="password" name="password" placeholder="••••••••" required/>

            <div className="news-box flex-item">
                <input className="border-btn right-btn" type="checkbox" id="newsletter" name="newsletter" checked /> Je souhaite recevoir la newsletter
            </div>

            <button className="green-btn">Envoyer</button>
        </form>
    )
}

export default Signup

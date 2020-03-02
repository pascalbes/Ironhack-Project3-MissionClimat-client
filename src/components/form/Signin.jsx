import React from 'react'

const Signin = () => {
    function handleChange(){
        "huhu"
    }

    function handleSubmit(){
        "huhu"
    }

    return (
        <form className="form contact-form flex-item flex-column" onChange={handleChange} onSubmit={handleSubmit}>
            <label className="label" htmlFor="from">Votre adresse e-mail</label>
            <input className="input border-btn" id="from" type="email" name="from" placeholder="example@domaine.com" required/>

            <label className="label" htmlFor="password">Votre mot de passe</label>
            <input className="input border-btn" id="from" type="password" name="password" placeholder="••••••••" required/>

            <button className="green-btn">Envoyer</button>
        </form>
    )
}

export default Signin

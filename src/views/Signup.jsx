import React from 'react'
import SignupForm from "../components/form/Signup"
import "../styles/form.css"

const Signup = () => {
    return (
        <div className="form-page flex-item flex-column">
            <h2>Créez votre compte</h2>
            <SignupForm/>
            <p>Vous êtes déjà inscrit(e) ? <a href="/signin">Par ici !</a></p>
        </div>
    )
}

export default Signup

import React from 'react'
import SigninForm from "../components/form/Signin"
import "../styles/form.css"

const Signin = () => {
    return (
        <div className="form-page flex-item flex-column">
            <h2>Identifiez-vous</h2>
            <SigninForm/>
            <p>Vous n'êtes pas encore inscrit(e) ? <a href="/signup">Par ici !</a></p>
        </div>
    )
}

export default Signin

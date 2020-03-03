import React, {useState, useContext} from 'react'
import { Redirect } from 'react-router-dom'
import { withRouter } from "react-router";

import UserContext from "../../auth/UserContext";


import APIHandler from "../../api/APIHandler";


const Signin = (props) => {

    const [user, setUser] = useState({});
    const userContext = useContext(UserContext);
    const { setCurrentUser } = userContext;

    
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const apiRes = await APIHandler.post("/session/signin", user);
      console.log(apiRes)
      setCurrentUser(apiRes.data.currentUser);
      console.log(props)
      props.history.push('/dashboard')
    } catch (err) {
      setCurrentUser(null);
    }
  };

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value });
  }

    return (
        <form className="form contact-form flex-item flex-column" onChange={handleChange} onSubmit={handleSubmit}>
            <label className="label" htmlFor="from">Votre adresse e-mail</label>
            <input className="input border-btn" id="from" type="email" name="email" placeholder="example@domaine.com" required/>

            <label className="label" htmlFor="password">Votre mot de passe</label>
            <input className="input border-btn" id="from" type="password" name="password" placeholder="••••••••" required/>

            <button className="green-btn">Envoyer</button>
        </form>
    )
}

export default withRouter(Signin)

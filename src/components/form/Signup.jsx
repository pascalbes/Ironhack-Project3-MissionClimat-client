import React, {useState, setState} from 'react'
import APIHandler from "../../api/APIHandler";
import { withRouter } from "react-router";



const Signup = (props) => {

    const [user, setUser] = useState({});
    // const [password, setPassword] = useState("password");
    // const [newsletter, setNewsletter] = useState(true)


    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await APIHandler.post("/session/signup", user);
            console.log("ok");
            
            props.history.push("/signin");
          } catch (err) {
            console.error(err);
          }
      };

      const handleChange = e => {
          e.target.type !== "checkbox" ?
        setUser({...user, [e.target.name]: e.target.value }) :
        setUser({...user, [e.target.name]: e.target.checked});
      };
    

    return (
        <form className="form contact-form flex-item flex-column" onChange={handleChange} onSubmit={handleSubmit}>

            <label className="label" htmlFor="email">Votre adresse e-mail</label>
            <input className="input border-btn" id="email" type="email" name="email" placeholder="example@domaine.com" required/>

            <label className="label" htmlFor="password">Votre mot de passe</label>
            <input className="input border-btn" id="password" type="password" name="password" placeholder="••••••••" required/>

            <div className="error-message">
            {user.password && user.password.length <= 7 && <p>Le mot de passe doit faire 8 caractères minimum.</p>}
            </div>

            <div className="news-box flex-item">
                <input className="border-btn right-btn" type="checkbox" id="newsletter" name="isNewsLetter"  /> Je souhaite recevoir la newsletter
            </div>

            <button className="green-btn">Envoyer</button>
        </form>
    )
}

export default withRouter(Signup)

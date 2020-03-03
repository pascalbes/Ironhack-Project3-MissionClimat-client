import React, {useContext} from 'react'
import "../styles/dashboard.css"
import { withRouter } from "react-router-dom";
import APIHandler from "../api/APIHandler";
import UserContext from "../auth/UserContext";


const Dashboard = (props) => {
    const userContext = useContext(UserContext);
    const { setCurrentUser } = userContext;

    function handleSignout() {
        APIHandler.post("/session/signout").finally(() => {
            props.history.push("/signin")
            setCurrentUser(null);
            console.log("signed out!")
    })
}

    return (
        <div className="dashboard-page flex-item flex-column">
            <div className="userbox border-btn light flex-item flex-column">
                <div className="userbox-head flex-item">
                    <h2 className="nomarge">///username</h2>
                    <div className="userbox-tools flex-item">
                        <button onClick={handleSignout} className="green-btn right-btn">Log out</button>
                        <button className="green-btn right-btn">Mettre à jour</button>
                        <button className="green-btn">Supprimer</button>
                    </div>
                </div>
                <h3>Mes simulations enregistrées : </h3>
                <div className="saved-sims border-btn flex-item">
                    <div>1 2 3</div>
                    <button className="green-btn">Démarrer</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Dashboard)

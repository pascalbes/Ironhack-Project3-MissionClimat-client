import React, {useContext, useState, useEffect} from 'react'
import "../styles/dashboard.css"
import { withRouter } from "react-router-dom";
import APIHandler from "../api/APIHandler";
import UserContext from "../auth/UserContext";
import { Link } from 'react-router-dom'


const Dashboard = (props) => {

    const userContext = useContext(UserContext);

    const { setCurrentUser } = userContext;

    const [scenariosList, setScenariosList] = useState(userContext.currentUser.scenarios)
    console.log("user context scenarios", userContext.currentUser.scenarios)

    useEffect(() => {
        setScenariosList(userContext.currentUser.scenarios)
        console.log("coucou")
    }, [userContext])

    function handleSignout() {
        APIHandler.post("/session/signout").finally(() => {
            props.history.push("/signin")
            setCurrentUser(null);
            console.log("signed out!")
        })
    }

        const deleteScenario = async (scenario, i) => {
            console.log(scenario, i);
            try {
                var rv = await APIHandler.patch('/users/delete-scenario', {i})
                console.log(rv.data)
                setCurrentUser(rv.data)
                // setScenariosList(rv.data.data)
            }
            catch (err) {
                console.error(err);
            }
        }

    
    
    

    console.log(userContext)

    return (
        <div className="dashboard-page flex-item flex-column">
            <div className="userbox border-btn light flex-item flex-column">
                <div className="userbox-head flex-item">
                    <h2 className="nomarge">Dashboard</h2>
                    <div className="userbox-tools flex-item">
                        <button onClick={handleSignout} className="green-btn right-btn">Log out</button>
                        <button className="green-btn right-btn">Mettre à jour</button>
                        <button className="green-btn">Supprimer</button>
                    </div>
                </div>
                <h3>Mes simulations enregistrées : </h3>
                <div className="saved-sims border-btn flex-item">
                    <ul>
                        {scenariosList.map((scenario, i) => (
                            <li className="li-scenario" key={i}>
                                <div className="div-name-description">
                                    <p>{scenario.name}</p> 
                                    <p>{scenario.description}</p>
                                </div>
                                <div className="div-scenario-buttons">
                                    <a href={scenario.url}><button className="dash-btn">Voir</button></a>
                                    <button className="dash-btn">Editer</button>
                                    <button onClick={() => deleteScenario(scenario, i)} className="dash-btn">Supprimer</button>
                                </div>
                            </li>
                        ))}
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Dashboard)

import React from 'react'
import "../styles/dashboard.css"

const Dashboard = () => {
    return (
        <div className="dashboard-page flex-item flex-column">
            <div className="userbox border-btn light flex-item flex-column">
                <div className="userbox-head flex-item">
                    <h2 className="nomarge">///username</h2>
                    <div className="userbox-tools flex-item">
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

export default Dashboard

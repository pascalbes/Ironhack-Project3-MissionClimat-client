import React from 'react'
import "../styles/concept.css"

const Concept = () => {
    return (
        <div className="concept-page flex-item flex-column">
            <div className="concept-box border-btn light flex-item flex-column">
                <h3>Le concept</h3>
            </div>

            <div className="concept-box border-btn light flex-item flex-column">
                <h3>Les enjeux</h3>
            </div>

            <div className="concept-box border-btn light flex-item flex-column">
                <h3>Les arguments</h3>
            </div>

            <div className="concept-box border-btn light flex-item flex-column">
                <h3>FAQ</h3>
            </div>
        </div>
    )
}

export default Concept

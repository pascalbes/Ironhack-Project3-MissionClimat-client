import React from 'react'
import ContactForm from "../components/form/Contact"
import "../styles/form.css"

const Contact = () => {
    return (
        <div className="form-page flex-item flex-column">
            <h2>Contact</h2>
            <ContactForm/>
        </div>
    )
}

export default Contact

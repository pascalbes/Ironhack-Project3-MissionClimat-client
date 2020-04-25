import React from 'react'
import ContactForm from "../components/form/Contact"
import "../styles/contact.css"
import Header from "../components/partials/Header";

const Contact = () => {
    return (
        <div className="form-page flex-item flex-column light-text">
            <Header/>
            <h2>Contact</h2>
            <ContactForm/>
        </div>
    )
}

export default Contact

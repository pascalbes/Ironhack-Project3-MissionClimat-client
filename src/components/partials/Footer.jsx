import React from 'react'
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, RedditShareButton, TwitterShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, RedditIcon, EmailIcon, } from "react-share";


const Footer = () => {
    return (
        <footer className="flex-item nomarge flex-item">
            <div className="footer-item flex-item">
                <img className="footer-logo" src="../../images/logo/logoIH.svg" alt="Logo Ironhack"/>
                <img className="footer-logo" src="../../images/logo/BLevo.png" alt="Logo B&L"/>
                <img className="footer-logo" src="../../images/logo/AC.png" alt="Logo Avenir Climatique"/>
                <img className="footer-logo" src="../../images/logo/GIEC.svg" alt="Logo GIEC"/>
                <img className="footer-logo" src="../../images/logo/PG.svg" alt="Logo Pauline Gautreau"/>
            </div>
            <div className="footer-item flex-item">
                <EmailShareButton url={window.location.href} className="left-btn" subject="Mission 1.5 : mon plan climat pour 2030"><EmailIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></EmailShareButton>
                <FacebookShareButton url={window.location.href} className="left-btn" quote="Mission 1.5 : mon plan climat pour 2030" hashtag="#mission1.5 #ecologie #climat"><FacebookIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></FacebookShareButton>
                <TwitterShareButton url={window.location.href} className="left-btn" title="Mission 1.5 : mon plan climat pour 2030" via="Mission 1.5°C" hashtags={["mission1.5", "climat", "ecologie", "citoyen", "action"]}><TwitterIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></TwitterShareButton>
                <RedditShareButton url={window.location.href} className="left-btn" title="Mission 1.5 : Mon plan climat pour 2030"><RedditIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></RedditShareButton>
                <LinkedinShareButton url={window.location.href} className="left-btn" title="Mission 1.5 : Mon plan climat pour 2030" summary="Vous aussi, faites votre plan pour la France et tentez d'atteindre 1.5°C !" source="Mission 1.5°C"><LinkedinIcon size={32} round bgStyle={{fill: "white"}} iconFillColor={"var(--green)"}/></LinkedinShareButton>
            </div>
        </footer>
    )
}

export default Footer

import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon,
} from "react-share";

const Footer = () => {
  return (
    <footer className="flex-item nomarge flex-item">
      <div className="footer-item flex-item footer-logos">
        <img className="footer-logo" src="../../images/logo/BLBlanc-300x129.png" alt="Logo B&L" />
        <img className="footer-logo" src="../../images/logo/Pascal-logo.svg" alt="Logo pb" />
        <img className="footer-logo" src="../../images/logo/Nina-logo.svg" alt="Nina Gautreau" />
      </div>
      <div className="footer-item flex-item">
        <EmailShareButton
          url={window.location.href}
          className="left-btn"
          subject="Mission Climat : mon plan climat pour 2030"
        >
          <EmailIcon size={32} round bgStyle={{ fill: "white" }} iconFillColor={"var(--green)"} />
        </EmailShareButton>

        <FacebookShareButton
          url={window.location.href}
          className="left-btn"
          quote="Mission Climat : mon plan climat pour 2030"
          hashtag="#missionclimat #ecologie #climat"
        >
          <FacebookIcon
            size={32}
            round
            bgStyle={{ fill: "white" }}
            iconFillColor={"var(--green)"}
          />
        </FacebookShareButton>

        <TwitterShareButton
          url={window.location.href}
          className="left-btn"
          title="Mission Climat : mon plan climat pour 2030"
          via="Mission Climat"
          hashtags={["missionclimat", "climat", "ecologie", "citoyen", "action"]}
        >
          <TwitterIcon size={32} round bgStyle={{ fill: "white" }} iconFillColor={"var(--green)"} />
        </TwitterShareButton>

        <RedditShareButton
          url={window.location.href}
          className="left-btn"
          title="Mission Climat : Mon plan climat pour 2030"
        >
          <RedditIcon size={32} round bgStyle={{ fill: "white" }} iconFillColor={"var(--green)"} />
        </RedditShareButton>

        <LinkedinShareButton
          url={window.location.href}
          className="left-btn"
          title="Mission Climat : Mon plan climat pour 2030"
          summary="Vous aussi, faites votre plan pour la France !"
          source="Mission Climat"
        >
          <LinkedinIcon
            size={32}
            round
            bgStyle={{ fill: "white" }}
            iconFillColor={"var(--green)"}
          />
        </LinkedinShareButton>
      </div>
    </footer>
  );
};

export default Footer;

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

const ResultsSocial = ({ results, fillColor, handleClickTracking }) => {
  return (
    <>
      <EmailShareButton
        url={results.url}
        className="left-btn"
        subject="Mission Climat : mon plan climat pour 2030"
        onClick={() => handleClickTracking("shareEmail")}
      >
        <EmailIcon size={32} round bgStyle={{ fill: "white" }} iconFillColor={fillColor} />
      </EmailShareButton>

      <FacebookShareButton
        onClick={() => handleClickTracking("shareFB")}
        url={results.url}
        className="left-btn"
        quote="Voilà mon plan climat pour 2030 ! Et vous ?"
        hashtag="#missionclimat #ecologie #climat"
      >
        <FacebookIcon size={32} round bgStyle={{ fill: "white" }} iconFillColor={fillColor} />
      </FacebookShareButton>

      <TwitterShareButton
        url={results.url}
        className="left-btn"
        title="Mission Climat : mon plan climat pour 2030"
        via="Mission Climat"
        hashtags={["missionclimat", "climat", "ecologie", "citoyen", "action"]}
        onClick={() => handleClickTracking("shareTwitter")}
      >
        <TwitterIcon size={32} round bgStyle={{ fill: "white" }} iconFillColor={fillColor} />
      </TwitterShareButton>

      <RedditShareButton
        url={results.url}
        className="left-btn"
        title="Mission Climat : Mon plan climat pour 2030"
        onClick={() => handleClickTracking("shareReddit")}
      >
        <RedditIcon size={32} round bgStyle={{ fill: "white" }} iconFillColor={fillColor} />
      </RedditShareButton>

      <LinkedinShareButton
        url={results.url}
        className="left-btn"
        title="Mission Climat : Mon plan climat pour 2030"
        summary="Vous aussi, faites votre plan pour la France !"
        source="Mission Climat"
        onClick={() => handleClickTracking("shareLinkedIn")}
      >
        <LinkedinIcon size={32} round bgStyle={{ fill: "white" }} iconFillColor={fillColor} />
      </LinkedinShareButton>
    </>
  );
};

export default ResultsSocial;

import React, { useState } from "react";
import "styles/contribuer.css";
import Header from "components/partials/Header";
import api from "api/APIHandler";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [email, setEmail] = useState();

  function handleChange(e) {
    setEmail(e.target.value);
  }

  function handlePost(e) {
    e.preventDefault();
    api
      .post("/email/" + email)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="form-page flex-item flex-column light-text">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mission Climat / Contact</title>
        <meta name="description" content="Page de contact de Mission Climat" />
        <link rel="canonical" href="http://mission-climat.io/contact" />
      </Helmet>
      <Header />
      <div className="margeup contribuer">
        <div className="contribuer-title flex-item flex-column">
          <h3>Contactez l'équipe</h3>
        </div>

        <div className="contact-white" id="contact-email">
          <h5>contact@mission-climat.io</h5>
        </div>

        <section id="contact-form" className="flex-item">
          <div className="flex-item flex-column light-text">
            <div className="flex-item contact-title">
              <img src="../../../images/logo/Enjeux.svg" alt="" />
              <h6>Contributions</h6>
            </div>
            <p>Vous voulez nous aider à maintenir et créer le futur du site ?</p>
            <p>
              <b>contact@mission-climat.io</b>
            </p>

            <div className="flex-item contact-title">
              <img src="../../../images/logo/Idea.svg" alt="" />
              <h6>Propositions</h6>
            </div>
            <p>Vous avez une idée incroyable pour améliorer Misson Climat ?</p>
            <p>
              <b>contact@mission-climat.io</b>
            </p>

            <div className="flex-item contact-title">
              <img src="../../../images/about/liens articles - blanc.svg" alt="" />
              <h6>S'associer</h6>
            </div>
            <p>Vous souhaitez échanger avec l'équipe ou établir un partenariat ?</p>
            <p>
              <b>contact@mission-climat.io</b>
            </p>
          </div>

          <div className="flex-item flex-column light-text">
            <div className="flex-item contact-title">
              <img src="../../../images/logo/Qna.svg" alt="" />
              <h6>Corrections</h6>
            </div>
            <p>Vous souhaitez nous faire part d'une erreur, d'un bug trouvé sur le site ?</p>
            <p>
              <b>contact@mission-climat.io</b>
            </p>

            <div className="flex-item contact-title">
              <img src="../../../images/about/liens articles - blanc.svg" alt="" />
              <h6>Données personnelles</h6>
            </div>
            <p>
              Le seul traitement de données personnelles que nous réalisons est le stockage des
              email que vous nous partagez, aux seuls fins d'information sur le site Mission Climat.
              Si vous souhaitez que nous supprimions votre email de notre base, merci de nous
              contacter.
            </p>
            <p>
              <b>contact@mission-climat.io</b>
            </p>
          </div>
        </section>

        <div className="contribuer-title flex-item flex-column">
          <h3>Newsletter</h3>
        </div>

        <div className="contact-white">
          <h5>Être informé des évolutions de Missions Climat</h5>
          <p>
            Partagez votre email et cette information ponctuelle sera le seul usage que nous en
            aurons.
          </p>
          <form onSubmit={handlePost}>
            <label>Email :</label>
            <input type="email" name="email" onChange={handleChange} />
            <button className="valid-button">
              <input type="submit" value="Partager" />
            </button>
          </form>
        </div>
      </div>

      {/* <h3>Contact</h3>
            <ContactForm/> */}
    </div>
  );
};

export default Contact;

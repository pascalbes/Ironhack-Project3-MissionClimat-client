import React from "react";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import { Link } from "react-router-dom";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";

import "../styles/home.css";
import "../styles/footer.css";

import styled from "@emotion/styled";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  button {
    font-size: 32px;
  }
`;

const Home = () => {
  return (
    <Layout>
      <HomeContainer>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mission Climat</title>
          <meta
            name="description"
            content="Votre mission, si vous l'acceptez, est de proposer un scénario climat 2030 pour la France, permettant de limiter les impacts du dérèglement climatique à un niveau soutenable."
          />
          <link rel="canonical" href="http://mission-climat.io/" />
        </Helmet>
        <h1>
          <span className="hero-mission">mission</span>
          <br />
          <span className="hero-temp">Climat</span>
        </h1>
        <Link to="/onboarding">
          <button className="green-btn">Démarrer</button>
        </Link>
      </HomeContainer>
    </Layout>
  );
};

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 92vh;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </LayoutContainer>
  );
};

const OnboardingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  > div {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
  }
  p {
    font-size: 24px;
  }
  button {
    font-size: 32px;
  }
`;

export const Onboarding = () => {
  return (
    <Layout>
    <OnboardingContainer>
      <div>
        <p>Vous avez été tiré au sort parmi l’ensemble des français.</p>
        <p>Vous êtes chargé de la politique climat.</p>
        <p>
          Votre mission, si vous l’acceptez, est de réduire les émissions de GES
          de la France d’ici 2030.
        </p>
        <p>De 50%.</p>
        <p>Vous avez 2 minutes.</p>
      </div>
      <Link to="/simulator">
          <button className="green-btn">Mission Acceptée</button>
        </Link>
    </OnboardingContainer>
    </Layout>
  );
};

export default Home;

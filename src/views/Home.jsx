import React, { useState, useEffect } from "react";
import Header from "../components/partials/Header";
import Footer from "../components/partials/Footer";
import { Link } from "react-router-dom";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import api from "../api/APIHandler";
import emissions2020 from "../components/game/emission2020";
import Sunburst from "../components/simulateur/sunburstChart";

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
  const deleteSheet = () => {
    if (localStorage.getItem("idSheet")) {
      var idSheet = localStorage.getItem("idSheet");
      localStorage.removeItem("idSheet");
      api
        .delete("/sheet/delete", idSheet)
        .then((res) => {
          console.log("SHEET DELETED!", res);
        })
        .catch((err) => console.log(err));
    }
  };
  deleteSheet();
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
    display: flex;
  flex-direction: column;
  align-items: center;
  }
  p {
    font-size: 36px;
  }
  button {
    font-size: 32px;
  }
  .footer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 48px;
    p {
      font-size: 16px;
    }
  }
  .sunburst_container {
    width: 300px;
    height: 300px;
  }
`;

export const Onboarding = () => {
  const [step, setStep] = useState(1);
  return (
    <Layout>
      <OnboardingContainer>
        {step === 1 && <OnboardingPart1 onNext={() => setStep(2)} />}
        {step === 2 && <OnboardingPart2 />}
      </OnboardingContainer>
    </Layout>
  );
};

const OnboardingPart1 = ({ onNext }) => {
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextFullyTyped, setIsTextFullyTyped] = useState(false);
  const text = [
    "Félicitations, vous avez été tiré au sort parmi l'ensemble des français.",
    "Vous êtes chargé de la politique climat.",
  ];
  const typingSpeed = 50; // Adjust typing speed in milliseconds

  useEffect(() => {
    let currentText = "";
    const typeNextCharacter = () => {
      if (currentIndex > 1) {
        setTimeout(() => {
          setIsTextFullyTyped(true);
        }, 1000);
      } else {
        const currentLine = text[currentIndex];
        if (currentText.length < currentLine.length) {
          currentText += currentLine[currentText.length];
          currentIndex === 0
            ? setTypedText1(currentText)
            : setTypedText2(currentText);
          setTimeout(typeNextCharacter, typingSpeed);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }
    };
    typeNextCharacter();
  }, [currentIndex]);

  return (
    <>
      <div>
        <p>{typedText1}</p>
        <p>{typedText2}</p>
      </div>
      {isTextFullyTyped && (
        <button className="green-btn" onClick={onNext}>
          Lettre de mission
        </button>
      )}
    </>
  );
};

const OnboardingPart2 = () => {
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextFullyTyped, setIsTextFullyTyped] = useState(false);
  const text = [
    "Vous devez proposer un plan climat pour la France, pour 2030.",
    "Votre mission, si vous l'acceptez, est de réduire les émissions de 50%.",
  ];
  const typingSpeed = 50; // Adjust typing speed in milliseconds

  const legendData = pieLegend(emissions2020);

  useEffect(() => {
    let currentText = "";
    const typeNextCharacter = () => {
      if (currentIndex > 1) {
        setTimeout(() => {
          setIsTextFullyTyped(true);
        }, 1000);
      } else {
        const currentLine = text[currentIndex];
        if (currentText.length < currentLine.length) {
          currentText += currentLine[currentText.length];
          currentIndex === 0
            ? setTypedText1(currentText)
            : setTypedText2(currentText);
          setTimeout(typeNextCharacter, typingSpeed);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      }
    };
    typeNextCharacter();
  }, [currentIndex]);
  return (
    <>
      <div>
        <p>{typedText1}</p>
        <p>{typedText2}</p>
      </div>
      {isTextFullyTyped && (
        <>
          <div className="footer">
            <div className="sunburst_container">
              <Sunburst datas={emissions2020} />
            </div>
            <Legend data={legendData} />
          </div>
          <Link to="/simulator">
            <button className="green-btn">Accepter la mission</button>
          </Link>
        </>
      )}
    </>
  );
};

const Legend = ({ data }) => {
  return (
    <div className="res-chart-legend flex-item" style={{width: "400px"}}>
      {data.map((data, i) => (
        <div key={i} className="flex-item">
          <div
            key={"l" + i}
            className="legend-point"
            style={{ backgroundColor: data.color }}
          ></div>
          <div>
            <p key={"bt" + i} className="bold-text">
              {data.dataKey}
            </p>
            <p key={"lt" + i} className="light-text">
              {data.subText}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const pieLegend = (datas) => {
  datas.data01.map((data) => {
    data.dataKey = data.name;
    data.subText = Math.round(data.value) + " MtCO2";
    return data;
  });

  return datas.data01;
};

export default Home;

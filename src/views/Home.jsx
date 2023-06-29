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
import { Indicator } from "./SimulatorMission";

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
        {step === 2 && <OnboardingPart2 onNext={() => setStep(3)} />}
        {step === 3 && <OnboardingPart3 />}
      </OnboardingContainer>
    </Layout>
  );
};

const typingSpeed = 30;

const OnboardingPart1 = ({ onNext }) => {
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextFullyTyped, setIsTextFullyTyped] = useState(false);
  const text = [
    "Félicitations, la Convention Citoyenne vous a choisi !",
    "Vous prenez les rênes de la politique climatique nationale.",
  ];

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
        <p style={{ visibility: typedText1.length > 0 ? "visible" : "hidden" }}>
          {typedText1 || "-"}
        </p>
        <p style={{ visibility: typedText2.length > 0 ? "visible" : "hidden" }}>
          {typedText2 || "-"}
        </p>
      </div>
      <button
        className="green-btn"
        onClick={onNext}
        style={{ visibility: isTextFullyTyped ? "visible" : "hidden" }}
      >
        Lettre de mission
      </button>
    </>
  );
};

const Onboarding2 = styled.div`
  .arrow-container {
    position: relative;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 16px;
    border-color: transparent transparent transparent white;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .indicator_box {
    display: flex;
    align-items: center;
    gap: 32px;
    margin: 16px 0 32px;
    > p {
      margin-top: 18px;
    }
    .results-title {
      font-size: 16px;
    }
    .results-figure {
      width: 6em;
      height: 4rem;
      font-size: 24px;
    }
    .figure-unit {
      font-size: 16px;
    }
  }
`;

const OnboardingPart2 = ({ onNext }) => {
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextFullyTyped, setIsTextFullyTyped] = useState(false);
  const text = [
    "Vous devez proposer un plan climat pour la France, pour 2030.",
    "Votre mission, si vous l'acceptez, est de réduire les émissions de 50%.",
  ];

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
    <Onboarding2>
      <div>
        <p style={{ visibility: typedText1.length > 0 ? "visible" : "hidden" }}>
          {typedText1 || "-"}
        </p>
        <p style={{ visibility: typedText2.length > 0 ? "visible" : "hidden" }}>
          {typedText2 || "-"}
        </p>
      </div>
      <div style={{ visibility: isTextFullyTyped ? "visible" : "hidden" }}>
        <div className="indicator_box">
          <Indicator
            title="Émissions 2020"
            text="750"
            unit="MtCO2"
            //subtitle="Incluent les émissions importées"
            backgroundColor="#40E0D0"
            color="#163E59"
          />
          <p>></p>
          <Indicator
            title="Objectif 2030"
            text="375"
            unit="MtCO2"
            subtitle=""
            color="white"
            backgroundImage="linear-gradient(to right, rgb(218, 143, 255), rgb(102, 51, 153))"
          />
        </div>
        <button className="green-btn" onClick={() => onNext()}>
          Mission acceptée
        </button>
      </div>
    </Onboarding2>
  );
};

const OnboardingPart3 = () => {
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTextFullyTyped, setIsTextFullyTyped] = useState(false);
  const text = [
    "Un indice pour vous aider,",
    "la répartition des émissions en 2020 :",
    // "Votre mission, si vous l'acceptez, est de réduire les émissions de 50%.",
  ]; 

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
        <p style={{ visibility: typedText1.length > 0 ? "visible" : "hidden" }}>
          {typedText1 || "-"}
        </p>
        <p style={{ visibility: typedText2.length > 0 ? "visible" : "hidden" }}>
          {typedText2 || "-"}
        </p>
      </div>
      <div style={{ visibility: isTextFullyTyped ? "visible" : "hidden" }}>
        <div className="footer">
          <div className="sunburst_container">
            <Sunburst datas={emissions2020} />
          </div>
          <Legend data={legendData} />
        </div>
        <Link to="/simulator">
          <button className="green-btn">Go</button>
        </Link>
      </div>
    </>
  );
};

const Legend = ({ data }) => {
  return (
    <div className="res-chart-legend flex-item" style={{ width: "400px" }}>
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

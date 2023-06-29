import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: white;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Circular Std";
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    line-height: 28px;
    color: #163e59;
    padding-bottom: 0;
  }
  .input_container {
    width: 100%;
    display: flex;
    gap: 16px;
    margin: 32px 0 16px;
    align-items: center;
    justify-content: space-between;
    input {
      flex: 2;
      height: 40px;
    }
    button {
      flex: 1;
      height: 40px;
    }
  }
  .user_score {
    color: red;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    font-weight: bold;
    background-color: #163e59;
    color: white;
    padding: 10px;
    text-align: left;
  }

  td {
    padding: 10px;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f9f9f9;
  }
`;

const ScoreBoard = ({ results }) => {
  const [scores, setScores] = useState([]);
  const [isScoreAdded, setIsScoreAdded] = useState(false);

  const emissions = getEmissions(results);
  const reduction = 1 - emissions / 750;

  const newScore = { name: "", reduction, emissions };
  const finalScores = isScoreAdded ? scores : [...scores, newScore];
  const sortedScores = [...finalScores].sort(
    (a, b) => a.emissions - b.emissions
  );

  useEffect(() => {
    const storedScores = localStorage.getItem("scores");
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    } else {
      localStorage.setItem("scores", JSON.stringify([]));
    }
  }, []);

  const handleAddScore = () => {
    const name = document.getElementById("name-input").value.trim();
    if (name !== "") {
      const newScore = { name, reduction, emissions };
      const updatedScores = [...scores, newScore];
      setScores(updatedScores);
      setIsScoreAdded(true);
      localStorage.setItem("scores", JSON.stringify(updatedScores));
    }
  };

  const getRanking = () => {
    const sortedScores = [...finalScores].sort(
      (a, b) => a.emissions - b.emissions
    );
    const index = sortedScores.findIndex(
      (score) => score.emissions === emissions
    );
    return index >= 0
      ? `Congratulations, you are ranked ${index + 1} among the ${
          finalScores.length
        } participants.`
      : "";
  };

  return (
    <Container>
      <h1>Mon Score</h1>
      <div>{getRanking()}</div>
      <div className="input_container">
        <input id="name-input" label="Name" variant="outlined" />
        <button
          className="blue-btn"
          onClick={handleAddScore}
          disabled={isScoreAdded}
        >
          Add
        </button>
      </div>

      <Table>
        <thead>
          <tr>
            <th>Rang</th>
            <th>Nom</th>
            <th>Emissions</th>
            <th>Réduction</th>
          </tr>
        </thead>
        <tbody>
          {sortedScores.map((score, index) => (
            <tr
              key={index}
              className={
                score.emissions === emissions && score.name.length === 0
                  ? "user_score"
                  : ""
              }
            >
              <td>{index + 1}</td>
              <td>{score.name}</td>
              <td>{Math.round(score.emissions)} MtCO2eq</td>
              <td>{Math.round(score.reduction * 1000) / 10} %</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

const getEmissions = (results) => {
  const emissions2030 = results.emiSecteurGnl.data.data[10];
  return Object.values(emissions2030).reduce((total, value) => {
    if (value !== "2030") {
      return total + value;
    }
    return total;
  }, 0);
};

export default ScoreBoard;

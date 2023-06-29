import React, { useState, useEffect } from 'react';

const ScoreBoard = ({results}) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const storedScores = localStorage.getItem('scores');
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    } else {
      localStorage.setItem('scores', JSON.stringify([]));
    }
  }, []);

  const handleAddScore = () => {
    const name = document.getElementById('name-input').value.trim();
    if (name !== '') {
      const newScore = { name, reduction, emissions };
      const updatedScores = [...scores, newScore];
      setScores(updatedScores);
      localStorage.setItem('scores', JSON.stringify(updatedScores));
    }
  };

  const getRanking = () => {
    const sortedScores = [...scores].sort(
      (a, b) => b.emissions - a.emissions
    );
    const index = sortedScores.findIndex((score) => score.emissions === emissions);
    return index >= 0
      ? `Congratulations, you are ranked ${index + 1} among the ${scores.length} participants.`
      : '';
  };

  const emissions = getEmissions(results);
  const reduction = 1 - emissions / 750;

  return (
    <div>
      <div>{getRanking()}</div>
      <input id="name-input" label="Name" variant="outlined" />
      <button variant="contained" onClick={handleAddScore}>Add</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Emissions</th>
            <th>Reduction</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={index}>
              <td>{score.name}</td>
              <td>{score.emissions}</td>
              <td>{score.reduction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const getEmissions = (results) => {
  const emissions2030 = results.emiSecteurGnl.data.data[10];
  return Object.values(emissions2030).reduce((total, value) => {
    if (value !== '2030') {
      return total + value;
    }
    return total;
  }, 0)
}

export default ScoreBoard
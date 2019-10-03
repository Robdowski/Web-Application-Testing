import React, { useState } from "react";
import Display from "./Display"

export default function Dashboard() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const strike = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes + 1);
    }
  };

  const ball = () => {
    if (balls === 3) {
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls + 1);
    }
  };

  const hit = () => {
    setBalls(0);
    setStrikes(0);
  };

  const foul = () => {
    if (strikes !== 2) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(strikes);
    }
  };

  return (
    <div className="container">
        <Display strikes={strikes} balls={balls} />
      <div className="dashboard-buttons">
        <button onClick={strike}>Strike</button>
        <button onClick={ball}>Ball</button>
        <button onClick={foul}>Foul</button>
        <button onClick={hit}>Hit</button>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

function ChessClock() {
  const initialTime = 5400; // 90 minutes in seconds

  const [player1Time, setPlayer1Time] = useState(initialTime);
  const [player2Time, setPlayer2Time] = useState(initialTime);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (currentPlayer === 1) {
          setPlayer1Time(prevTime => Math.max(0, prevTime - 1));
        } else {
          setPlayer2Time(prevTime => Math.max(0, prevTime - 1));
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [currentPlayer, isRunning]);

  const handleSwitchPlayer = () => {
    setCurrentPlayer(prevPlayer => (prevPlayer === 1 ? 2 : 1));
  };

  const handleStartPause = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };

  const handleReset = () => {
    setPlayer1Time(initialTime);
    setPlayer2Time(initialTime);
    setIsRunning(false);
    setCurrentPlayer(1);
  };

  return (
    <div className="chess-clock">
      <div className={`player ${currentPlayer === 1 && 'active'}`}>
        <h2>Player 1</h2>
        <div className="time">
          {Math.floor(player1Time / 60).toString().padStart(2, '0')}:
          {(player1Time % 60).toString().padStart(2, '0')}
        </div>
      </div>
      <div className={`player ${currentPlayer === 2 && 'active'}`}>
        <h2>Player 2</h2>
        <div className="time">
          {Math.floor(player2Time / 60).toString().padStart(2, '0')}:
          {(player2Time % 60).toString().padStart(2, '0')}
        </div>
      </div>
      <div className="controls">
        <button onClick={handleStartPause}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={handleSwitchPlayer}>Switch Player</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default ChessClock;

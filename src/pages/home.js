import React, { useState, useEffect } from "react";
import Pomodoro from "../components/pomodoro";

export default function Home() {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart((start) => !start);
  };

  return (
    <div>
      {start ? (
        <div>
          <Pomodoro />
          <button onClick={handleStart}>Stop</button>
        </div>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
    </div>
  );
}
